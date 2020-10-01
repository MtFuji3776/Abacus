import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//const element = <h1>Hello, world</h1>; // DOMに見えるのはシンタックスシュガーで実際はオブジェクト
//ReactDOM.render(element, document.getElementById('root'));

// function tick(){
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick,1000);

// function Welcome(props){
//     return <h1>Hello, {props.name}</h1>;
//   }
// const element = <Welcome name = "Sara" />;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>;
// }

// function App(){
//     return (
//         <div>
//           <Welcome name="Sara" />
//           <Welcome name="Cahal" />
//           <Welcome name="Edite" />
//         </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// function Comment(props){
//     return(
//         <div className="Comment">
//           <div className="UserInfo">

//             <img className="Avator"
//               src={props.author.avatorUrl}
//               alt={props.author.name}
//             />
//             <div className="UserInfo-name">
//               {props.author.name}
//             </div>
//           </div>
//           <div className="Comment-text">
//             {props.text}
//           </div>
//           <div className="Comment-date">
//             {formatDate(props.date)}
//           </div>
//         </div>
//     );
// }

function formatDate(date){
    return date.toLocalDateString();
}

function Avatar(props){
    return(
        <img className = "Avatar"
            src = {props.useravatarUrl}
            alt={props.user.name}
        />
    );
}

function Comment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function UserInfo(props){
    return(
        <div  className={"UserInfo"}>
            <Avatar user={props.user} />
            <div className = "UserInfo-name">
                {props.user.name}
            </div>
        </div>

    );
}

function Comment1(props){
    return(
        <div className="Comment">
          <UserInfo user={props.author} />
          <div className="Comment-text">
            {props.text}
          </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
        </div>
    );
}

function sum(a,b){
    return a + b;
}

function withdraw(account,amount){
    account.total -= amount;
}

const comment = {
    date : new Date(),
    text : 'Keitoのキンタマ潰してえ',
    author : {
        name : 'BallBusterOfKeito',
        avatarUrl : "./img/test.svg",
    },
};

ReactDOM.render(
    <Comment1
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);