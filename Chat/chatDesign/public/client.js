const socket = io ();
const userList = document.querySelector(".usersList");
const inputField = document.querySelector(".inputMessage");
const messageForm = document.querySelector(".formChat");
const history = document.querySelector(".messagehistory");
const typingUser = document.querySelector(".typingUser")

//definir usuario

let userName = "";

const newUserCon = (user) => {
    userName = user || `Usuario${Math.floor(Math.random() * 1000)}`;
    socket.emit("newUser", userName);
    addUsers(userName);

}

//agregar nombres al div
const addUsers = (userName) => {
    if(!!document.querySelector(`.${userName}-userlist`)) {
        return;

    }

    const dataUser = `
        <li class="clearfix">
            <div class="about ${userName}-userlist">
                <div class="name"> ${userName}</div>
                <div class="status">
                    <i class="fa fa-circle online"></i>En linea
                </div>
            </div>
        </li>

    
    `;

    userList.innerHTML+=dataUser;
}
const addNewMessage = ({user, message}) => {
    const hour = new Date();
    const messageHour = hour.toLocaleString("en-US", {hour: "numeric", minute: "numeric",});

    const rmsg = `
        <ul class="m-b-0">
            <li class="clearfix">
                <div class="message-data">
                    <span class="message-data-time">
                        ${messageHour}
                    </span>
                </div>
                <div class="message other-message">${message}</div>
            </li>
        </ul>
    
    `;
    
    const msg = `
        <ul class="m-b-0">
            <li class="clearfix">
                <div class="message-data text-right">
                <span class="message-data-time">
                    ${messageHour}
                    </span>
                </div>
                <div class="message my-message float-right">${message}</div>
            </li>
        </ul>
    
    `;

history.innerHTML+=user === userName ? msg : rmsg;
}


newUserCon();

messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!inputField.value){
        return
    }
    socket.emit("chatMessage",{
        message: inputField.value,
        nick: userName
    });
    inputField.value="";
});

inputField.addEventListener("keyup", () =>{
    socket.emit("typing", {
        isTyping: inputField.value.length > 0,
        nick: userName
    });
});


socket.on ("newUser", (data) => {
    data.map((user) => addUsers(user));

});

socket.on("userDisconnected", (userName) => {
    document.querySelector(`.${userName}-userlist`).remove();
});

socket.on("chatMessage", (data) =>{
    addNewMessage({user: data.nick, message: data.message});
});

socket.on ("typing", ( data) => {
    const{isTyping, nick } = data;

    if(!isTyping){
        typingUser.innerHTML="";
        return;
    }

    typingUser.innerHTML = `
    <span>
        ${nick} is typing...
    </span>
    `;


})

