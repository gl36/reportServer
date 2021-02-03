package root.bd.service;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageRowBounds;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import root.form.user.UserModel;
import root.report.db.DbFactory;
import root.report.sys.SysContext;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ModelService {

    private static Logger log = Logger.getLogger(ModelService.class);

    @Autowired
    private ModelTableService modelTableService;

    public Map<String,Object> getListPage(Map<String,String> map) {
        Map<String,Object> map1=new HashMap<>();
        try {
            SqlSession sqlSession = DbFactory.Open(DbFactory.FORM);
            RowBounds bounds = null;
            if (map == null) {
                bounds = RowBounds.DEFAULT;
            } else {
                Integer startIndex = Integer.parseInt(map.get("startIndex").toString());
                Integer perPage = Integer.parseInt(map.get("perPage"));
                if (startIndex == 1 || startIndex == 0) {
                    startIndex = 0;
                } else {
                    startIndex = (startIndex - 1) * perPage;
                }
                bounds = new PageRowBounds(startIndex, perPage);
            }
            List<Map<String, Object>> resultList = sqlSession.selectList("bdmodel.getListPage", map, bounds);
            Long totalSize = 0L;
            if (map != null && map.size() != 0) {
                totalSize = ((PageRowBounds) bounds).getTotal();
            } else {
                totalSize = Long.valueOf(resultList.size());
            }

            map1.put("list", resultList);
            map1.put("total", totalSize);

        }catch (Exception e){
            e.printStackTrace();
        }
        return map1;
    }
    /**
     * 功能描述: 根据JSON数据解析 对应数据，生成func_dict记录
     */
    public Map saveOrUpdateBdModel(SqlSession sqlSession,JSONObject jsonObject){
        UserModel user = SysContext.getRequestUser();
        Map<String,Object> resultMap  = new HashMap<>();
        resultMap.put("status",true);
        Map<String,Object> map  = new HashMap<>();
        String id="";
        map.put("model_name",jsonObject.getString("model_name"));
        map.put("model_id",jsonObject.getString("model_id"));
        Integer count = sqlSession.selectOne("bdmodel.count",map);
        if(count==0) {
            map.put("db_source", jsonObject.getString("db_source"));
            map.put("db_type", jsonObject.getString("db_type"));
            map.put("create_by", user.getId());
            map.put("update_by", user.getId());
            if (null == jsonObject.getString("model_id") || "".equals(jsonObject.getString("model_id"))) {
                Integer newId = sqlSession.selectOne("bdmodel.getMaxId");
                newId = newId == null ? 1 : newId;
                map.put("model_id", newId);
                sqlSession.insert("bdmodel.createBdModel", map);
                id = String.valueOf(map.get("id"));
            } else {

                sqlSession.update("bdmodel.updateBdModel", map);
                id = jsonObject.getString("model_id");
            }
            resultMap.put("info",id);
            return resultMap;
        }else{
            resultMap.put("status",false);
            resultMap.put("info","模型名称已存在");
            return resultMap;
        }

    }


    // 功能描述: 根据 dict_id 和 out_id 批量删除 func_dict的信息
    public void deleteBdmodelById(SqlSession sqlSession,int model_id){
            Map<String,Object> map=new HashMap();
            map.put("model_id",model_id);
            List<String> tabListId=sqlSession.selectList("bdmodel.getbdmodelId",map);
            for(int i=0;i<tabListId.size();i++){
                modelTableService.deletedbmodelTableById(sqlSession,tabListId.get(i));
            }
            sqlSession.delete("bdmodel.deleteBdModelByID",map);

    }

    public Map getBdmodelByID(Map m) {
        return DbFactory.Open(DbFactory.FORM).selectOne("bdmodel.getbdmodelById",m);
    }


    public List<Map> getAllList() {
        return DbFactory.Open(DbFactory.FORM).selectList("bdmodel.getAllList");
    }
}
