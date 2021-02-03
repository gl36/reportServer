package root.mqtt.controller;

import com.alibaba.fastjson.JSONObject;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import root.mqtt.service.MqttTaskService;
import root.report.common.RO;
import root.report.db.DbFactory;

import javax.annotation.Resource;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;


/**
 * 测试网关 1319100003
 * @author cannon
 */
@RestController
@RequestMapping(value = "/reportServer/mqttTask")
public class MqttTaskController extends RO {
	
	@Resource
	private MqttTaskService mqttTaskService;
	
	@RequestMapping(value = "/getMqttTaskList", produces = "text/plain;charset=UTF-8")
	public String getMqttTaskList(@RequestBody JSONObject pJson)  {
		try {
			Map<String,String> map=new HashMap();
			map.put("startIndex",pJson.getString("startIndex"));
			map.put("perPage",pJson.getString("perPage"));
			map.put("topic",pJson.get("topic")==null?"":pJson.getString("topic"));
			map.put("clientinid",pJson.get("clientinid")==null?"":pJson.getString("clientinid"));
/*			map.put("targetDB",pJson.get("targetDB")==null?"":pJson.get("targetDB").toString());
			map.put("targetTable",pJson.get("targetTable")==null?"":pJson.get("targetTable").toString());*/
			Map<String,Object> resultMap = mqttTaskService.getListPage(map);
			return SuccessMsg("", resultMap);
		} catch (Exception ex){
			return ExceptionMsg(ex.getMessage());
		}
	}

	@RequestMapping(value = "/getMqttTaskById", produces = "text/plain;charset=UTF-8")
	public String getMqttTaskById(@RequestBody JSONObject pJson)  {
		try{
			Map resultObject =mqttTaskService.getMqttTaskByID(pJson);
			return SuccessMsg("",resultObject);
		}catch (Exception ex){
			ex.printStackTrace();
			return ExceptionMsg(ex.getMessage());
		}

	}

	@RequestMapping(value = "/createMqttTask", produces = "text/plain;charset=UTF-8")
	public String createMqttTask(@RequestBody JSONObject pJson) throws SQLException {
		SqlSession sqlSession =  DbFactory.Open(DbFactory.FORM);
		try{
			sqlSession.getConnection().setAutoCommit(false);
			Map<String,Object> map  = this.mqttTaskService.saveOrUpdate(sqlSession,pJson);
			if(Boolean.valueOf(map.get("status").toString())){
				sqlSession.getConnection().commit();
				return SuccessMsg("保存成功",map.get("info"));
			}else{
				return ErrorMsg("保存失败",map.get("info").toString());
			}

		}catch (Exception ex){
			sqlSession.getConnection().rollback();
			ex.printStackTrace();
			return ExceptionMsg(ex.getMessage());
		}
	}

	@RequestMapping(value = "/updateState", produces = "text/plain;charset=UTF-8")
	public String updateState(@RequestBody JSONObject pJson) throws SQLException {
		SqlSession sqlSession =  DbFactory.Open(DbFactory.FORM);
		try{
			sqlSession.getConnection().setAutoCommit(false);
			Map param = new HashMap();
			param.put("state",pJson.getString("state"));
			param.put("id",pJson.getString("id"));
			Map<String,Object> map  = this.mqttTaskService.updateState(sqlSession,pJson);
			if(Boolean.valueOf(map.get("status").toString())){
				sqlSession.getConnection().commit();
				return SuccessMsg("保存成功",map.get("info"));
			}else{
				return ErrorMsg("保存失败",map.get("info").toString());
			}

		}catch (Exception ex){
			sqlSession.getConnection().rollback();
			ex.printStackTrace();
			return ExceptionMsg(ex.getMessage());
		}
	}

	@RequestMapping(value = "/deleteMqttTaskById", produces = "text/plain;charset=UTF-8")
	public String deleteMqttTaskById(@RequestBody JSONObject pJson) throws SQLException {
		try{

			Map param = new HashMap();
			param.put("id",pJson.getString("id"));
			this.mqttTaskService.deleteMqttTaskById(param);

		}catch (Exception ex){
			ex.printStackTrace();
			return ExceptionMsg(ex.getMessage());
		}
		return "";
	}

	@RequestMapping(value = "/findMqttTaskByIdAndNum", produces = "text/plain;charset=UTF-8")
	public String findMqttTaskByIdAndNum(@RequestBody JSONObject pJson) throws SQLException {
		try{
			return SuccessMsg("",this.mqttTaskService.findMqttTaskByIdAndNum(pJson));
		}catch (Exception ex){
			ex.printStackTrace();
			return ExceptionMsg(ex.getMessage());
		}

	}


}
