import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as io from 'socket.io-client';
import Echo from 'laravel-echo';
import pusher from 'pusher-js';



window['Pusher'] = pusher;

window['Echo'] = new Echo({
    broadcaster: 'pusher',
    key: 'websocketkey',
    wsHost: 'localhost',
    wsPort: 6001,
    disableStats: true,
});


console.log(window['Echo']);

//Escutando pelo canal
window['Echo'].channel('channel')
          .listen('Testing', (e) => {
              console.log(e);
          });


          

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'socketClient';
    private httpOptions;

    messages: [];
    users: [];

    // Isso aqui é o código do vim para implementar chat
    // ele ta usando o canal do tipo presence que vc pode dar join e leave
    // mas normalmente utilizamos canais privados para chat
    //
    // create() {
    //     this.getMessages();
    //     window['Echo'].join('chat')
    //         .here(users => {
    //             this.users = users;
    //         })
    //         .joining(user => {
    //             this.users.push(user);
    //         })
    //         .leaving(user => {
    //             this.users = this.users.filter(u => u.id !== user.id);
    //         })
    //         .listenForWhisper('typing', ({id, name}) => {
    //             this.users.forEach((user, index) => {
    //                 if (user.id === id) {
    //                     user.typing = true;
    //                     this.$set(this.users, index, user);
    //                     console.log(user);
    //                 }
    //             });
    //         })
    //         .listen('MessageSent', (event) => {
    //             this.messages.push({
    //                 message: event.message.message,
    //                 user: event.user
    //             });
    //
    //             this.users.forEach((user, index) => {
    //                 if (user.id === event.user.id) {
    //                     user.typing = false;
    //                     this.$set(this.users, index, user);
    //                 }
    //             });
    //             console.log(event.message.message);
    //         });
    // }
    //
    //
    // fetchMessages():Observable<any>{
    //     this.httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json'}) }
    //     return this.http.get(this.Url + '/messages',this.httpOptions).pipe(tap(res => res));
    // }
    //
    // getMessages(){
    //     this.fetchMessages()
    //         .subscribe(
    //             (res)=>{
    //                 console.log(res);
    //                 this.messages = res.data;
    //             },
    //             () => {
    //                 console.log('erro');
    //             }
    //         );
    // }

}
