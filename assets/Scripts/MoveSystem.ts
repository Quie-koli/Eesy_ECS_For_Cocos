import { Node, Vec3 } from 'cc';
import { BaseSystem } from './easy_ecs/BaseSystem';
import { Entity, EntityManager, IComponent } from './easy_ecs/EntityManager';

//数据继承IComponent
export class MoveComponent extends IComponent{
    pos: Vec3=new Vec3();
    node: Node;
}
//过程继承BaseSystem
export class MoveSystem extends BaseSystem {
    //声明该过程的数据类型为MoveComponent
    components: Map<Entity,MoveComponent>=new Map()
    p = new Vec3();
    update(value , deltaTime: number) {
        Vec3.normalize(this.p,value.pos);
        this.p.multiplyScalar(deltaTime);
        value.pos.x-=this.p.x
        value.pos.y-=this.p.y
        value.node.position=value.pos
        let f=0;
        for(let i=0;i<10000;i++)f++;
    }
}
//注册数据和过程
EntityManager.registerComponent(new MoveSystem,MoveComponent)
