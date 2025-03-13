import { Node, Vec3 } from 'cc';
import { BaseSystem } from './easy_ecs/BaseSystem';
import { Entity, EntityManager, IComponent } from './easy_ecs/EntityManager';


export class MoveComponent extends IComponent{
    pos: Vec3=new Vec3();
    node: Node;
}

export class MoveSystem extends BaseSystem {
    components: Map<Entity,MoveComponent>=new Map()
     p=new Vec3();
    update(deltaTime: number) {
        this.components.forEach(async (value) =>{
            Vec3.normalize(this.p,value.pos);
            this.p.multiplyScalar(deltaTime);
            value.pos.x-=this.p.x
            value.pos.y-=this.p.y
            value.node.position=value.pos
            let f=0;
            for(let i=0;i<10000;i++)f++;
        });
    }

}

EntityManager.registerComponent(new MoveSystem,MoveComponent)
