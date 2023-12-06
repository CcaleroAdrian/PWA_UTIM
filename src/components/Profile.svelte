<script>
  export let nickname;
  export let name;
</script>

<style>
  .Profile-content {
    display: flex;
    align-items: center;
  }
  .Profile-avatar img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .Profile-info {
    margin: 0 0 0 0.5em;
  }
  .Profile-info h2 {
    font-size: 14px;
    color: black;
    margin: 0;
    padding: 0;
  }
  .Profile-info span {
    font-size: 12px;
    font-weight: normal;
  }
</style>

<div class="Profile">
  <div class="Profile-content">
    <div class="Profile-avatar">
      <img src="https://firebasestorage.googleapis.com/v0/b/changarrito-food-delivery.appspot.com/o/Post%2Favatar.jpg?alt=media&token=1364cab5-372a-4da1-bd6b-30e487ce84cf" alt="avatar" />
    </div>
    <div class="Profile-info">
      <h2>{nickname}</h2>
      <span>{name}</span>
    </div>
  </div>
</div>
