<script>
    export let notification;
    /*function closeNotification() {
      notifications.update(notifs => notifs.filter(n => n.id !== notification.id));
    }*/
  </script>
  
  <div class="notification">
    <button on:click>&times;</button>
    <p>{notification.message}</p>
  </div>
  
  <style>
    /* Estilos para la notificación */
  </style>
  