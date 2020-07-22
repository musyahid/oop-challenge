class auth {

    constructor() {
        this.data = 0;
    }

    get user() {
        return this.data
    }

    get id() {
        this.data = data.id
    }

    login(data) {
        if(data.username == 'root' && data.password == 'secret') {
            return true
        }else {
            return false
        }
    }

    validate(data) {
        if(data.username == '') {
           return false
        }else if(data.password == '') {
            return false
        }
    }
    
}

const Auth = new auth()

Auth.login({id : 1, username: 'root', password: 'secret'})
    .user
