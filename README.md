这是一个简单的ESC框架，其性能较于普通组件模式高一些

## 使用例子
### 使用方式
```TypeScript
entityManager: EntityManager=new EntityManager()
start(){
  let entity=this.entityManager.addEntity();//新建一个实体
  this.entityManager.addComponent(entity,sampleComponent)//添加一个组件
  let samplecomponent=this.entityManager.getComponent(entity,sampleComponent)//获取组件
  samplecomponent.x=2333
}
```
### System例子
```TypeScript
import { BaseSystem } from './easy_ecs/BaseSystem';
import { Entity, EntityManager, IComponent } from './easy_ecs/EntityManager';

//数据继承IComponent
export class sampleComponent extends IComponent{
    x: number
}
//过程继承BaseSystem
export class sampleSystem extends BaseSystem {
    //声明该过程的数据类型为sampleComponent
    components: Map<Entity,sampleComponent>=new Map()
    update( value , deltaTime: number ) {
      //实现逻辑
    }
}
//注册数据和过程
EntityManager.registerComponent(new sampleSystem,sampleComponent)
```
