package root.report.algorithm.service;

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
public class AiAlgorithmService {

    private static Logger log = Logger.getLogger(AiAlgorithmService.class);

       public Map<String,Object> getListPage(Map<String,Object> map) {
        Map<String,Object> map1=new HashMap<>();
        try {
            SqlSession sqlSession = DbFactory.Open(DbFactory.FORM);
            RowBounds bounds = null;
            if (map == null) {
                bounds = RowBounds.DEFAULT;
            } else {
                Integer startIndex = Integer.parseInt(map.get("startIndex").toString());
                Integer perPage = Integer.parseInt(map.get("perPage").toString());
                if (startIndex == 1 || startIndex == 0) {
                    startIndex = 0;
                } else {
                    startIndex = (startIndex - 1) * perPage;
                }
                bounds = new PageRowBounds(startIndex, perPage);
            }
            List<Map<String, Object>> resultList = sqlSession.selectList("aialgorithm.getListPage", map, bounds);
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
    public Map saveOrUpdateAlgorithm(SqlSession sqlSession,JSONObject jsonObject){
        UserModel user = SysContext.getRequestUser();
        Map<String,Object> resultMap  = new HashMap<>();
        resultMap.put("status",true);
        Map<String,Object> map  = new HashMap<>();
        String id="";
        map.put("algorithm_name",jsonObject.getString("algorithm_name"));
        map.put("algorithm_id",jsonObject.getString("algorithm_id"));
        Integer count = sqlSession.selectOne("aialgorithm.count",map);
        if(count==0) {
            map.put("algorithm_class_id", jsonObject.getString("algorithm_class_id"));
            map.put("comment", jsonObject.getString("comment"));
            map.put("url", jsonObject.getString("url"));
            map.put("create_by", user.getId());
            if (null == jsonObject.getString("algorithm_id") || "".equals(jsonObject.getString("algorithm_id"))) {
                Integer newId = sqlSession.selectOne("aialgorithm.getMaxId");
                newId = newId == null ? 1 : newId;
                map.put("algorithm_id", newId);
                sqlSession.insert("aialgorithm.createAiAlgorithm", map);
                id = String.valueOf(map.get("id"));
            } else {

                sqlSession.update("aialgorithm.updateAiAlgorithm", map);
                id = jsonObject.getString("algorithm_id");
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
    public void deleteAlgorithmById(SqlSession sqlSession,int algorithm_id){
            Map<String,Object> map=new HashMap();
            map.put("algorithm_id",algorithm_id);
            sqlSession.delete("aialgorithm.deleteAiAlgorithmByID",map);

    }

    public Map getAlgorithmByID(Map m) {
        return DbFactory.Open(DbFactory.FORM).selectOne("aialgorithm.getAiAlgorithmById",m);
    }


    public List<Map> getAllList() {
        return DbFactory.Open(DbFactory.FORM).selectList("aialgorithm.getAllList");
    }
}
