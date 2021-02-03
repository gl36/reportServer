package root;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import root.report.db.DbFactory;

/**
 * Created by pangkunkun on 2017/9/3.
 */
@Component
public class MyApplicationRunner implements ApplicationRunner {

   /* @Resource
    private MyMqttPahoMessageDrivenChannelAdapter myMqttPahoMessageDrivenChannelAdapter;
*/
    @Override
    public void run(ApplicationArguments var1) throws Exception {
        System.out.println("reportServer启动成功!");
        //初始化system数据库连接
        System.out.println("开始初始化系统数据库!");
        try {
            DbFactory.initializeDB("form");

            System.out.println("初始化系统数据库成功!");
           // myMqttPahoMessageDrivenChannelAdapter.addTopicByGateway("1320040004");
        } catch (Exception ex) {
            System.out.println("初始化系统数据库失败!");
            ex.printStackTrace();
        }
    }

    /**
     * 初始化网关主题
     */
   /* private void initTopic(){
        List<Map<String,Object>> eamGatewayList = DbFactory.Open(DbFactory.FORM).selectList("eam_gateway.listEamGateway");
        if(eamGatewayList!=null && 0 < eamGatewayList.size()){
            for(Map<String,Object> map : eamGatewayList){
                if(map.containsKey("gateway_id")){
                    myMqttPahoMessageDrivenChannelAdapter.addTopicByGateway(String.valueOf(map.get("gateway_id")));
                }
            }
        }
    }*/

}