import { observable,action} from "mobx"

class RootStore{
    @observable
    name="悟空"

    @action // 行为，修改名称
    changeName(name){
        this.name = name
    }
}

export default new RootStore()