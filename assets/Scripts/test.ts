import { _decorator, Component, instantiate, Node } from 'cc';
import { EntityManager, IComponent } from './easy_ecs/EntityManager';
import { MoveComponent } from './MoveSystem';
import { MoveNormal } from './MoveNormal';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
    entityManager: EntityManager=new EntityManager()
    @property(Node)
    prefab: Node;
    start() {
        this.a();
        //this.b();
    }
    a(){//use ecs
        let p;
        let o;
        let c;
        for(let i=0;i<1000;i++){
            p=this.entityManager.addEntity();
            o=this.entityManager.addComponent(p,MoveComponent) 
            o.pos.x=(i/10)*5;
            o.pos.y=(i%10)*5;
            c=instantiate(this.prefab)
            c.setParent(this.node)
            o.node=c;
        }
    }
    b(){//normal Component
        for(let i=0;i<1000;i++){
            let c=instantiate(this.prefab)
            c.setParent(this.node)
            let o=c.addComponent(MoveNormal);
            o.pos.x=(i/10)*5;
            o.pos.y=(i%10)*5;
        }
    }
    update(deltaTime: number) {
        this.entityManager.update(deltaTime)
    }
}


