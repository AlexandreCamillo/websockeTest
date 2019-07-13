<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

//aqui fazemos a checagem de autorização para sabermos quem pode receber ou não os eventos dos canais privados e presenciais

Broadcast::channel('chat', function ($user) {
	return $user;
});


//não faz diferença pq esse canal é publico
Broadcast::channel('channel', function($user){
    return false;
});