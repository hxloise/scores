import users from '../src/content/users.json'

export function changerURL(url) {
    window.location.href = url;
}

export function setLeader(){
    let best_score = 0;
    let id_leader = 0;

    users.forEach(user => {
        let current_score = user.score.reduce((total, score) => total + (score || 0), 0);
        if(current_score > best_score){
            best_score = current_score
            id_leader = user._id
        }
    }); 
    //two players can't be leader...
    users[id_leader].leader = true;
}

export function isLeader(id){
    return users[id].leader
}