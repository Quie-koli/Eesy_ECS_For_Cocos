import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveNormal')
export class MoveNormal extends Component {
    pos: Vec3=new Vec3();
    p=new Vec3();
    async update(deltaTime: number) {
        Vec3.normalize(this.p,this.pos);
        this.p.multiplyScalar(deltaTime);
        this.pos.x-=this.p.x
        this.pos.y-=this.p.y
        this.node.position=this.pos
        let f=0;
        for(let i=0;i<10000;i++)f++;
    }
}


