<template lang="">
  <section id="contact">
<div class="contact-box">
  <div class="contact-links">
    <h2>CONTACT </h2>
    <div class="links">
      <div class="link">
        <a><img  id="img" src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"></a>
      </div>
      <div class="link">
        <a><img id="img" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"></a>
      </div>
      <div class="link">
        <a><img id="img" src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"></a>
      </div>
      <div class="link">
        <a><img  id="img" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"></a>
      </div>
    </div>
  </div>
  <div class="contact-form-wrapper">
    <form  action="https://formspree.io/f/xnqkenro" method="post">
      <div class="form-item">
        <input type="text" name="sender" required>
        <label>Name:</label>
      </div>
      <div class="form-item">
        <input type="text" name="email" required>
        <label>Email:</label>
      </div>
      <div class="form-item">
        <textarea class="" name="message" required></textarea>
        <label>Message:</label>
      </div>
      <button class="submit-btn">Send</button>
    </form>
  </div>
</div>
</section>
</template>
<script>
export default {
}
</script>
<style scoped>
  .row3 {
  display: flex;
  padding-top: 120px;
  padding-left: 100px;
  padding-bottom: 50px;
  padding-right: 50px;
  margin: -10px;
  gap: 25px;
  align-items: center;
  justify-content: center;
}
#img{
  display: flex;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
.block-reveal{
  font-style: sherif;
}
body {
  background-color: #6A9AC4;
}
#contact {
  background-image: url('https://i.ibb.co/2c5MZZg/Domain-Details-Page.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-box {
  width: clamp(100px, 90%, 1000px);
  margin: 80px 50px;
  display: flex;
  flex-wrap: wrap;
}
.contact-links, .contact-form-wrapper {
  width: 50%;
  padding: 8% 5% 10% 5%;
}
.contact-links {
  background-color: #1F2E43;
  background:
    radial-gradient(
      circle at 55% 92%, #426691 0 12%, transparent 12.2%
    ),
    radial-gradient(
      circle at 94% 72%, #426691 0 10%, transparent 10.2%
    ),
    radial-gradient(
      circle at 20% max(78%, 350px), #263A53 0 7%, transparent 7.2%
    ),
    radial-gradient(
      circle at 0% 0%, #263A53 0 40%, transparent 40.2%
    ),
    #1F2E43;
  border-radius: 10px 0 0 10px;
}
.contact-form-wrapper {
  background-color: #ffffff8f;
  border-radius: 0 10px 10px 0;
}
@media only screen and (max-width: 800px) {
  .contact-links, .contact-form-wrapper {
    width: 100%;
  }
  .contact-links {
    border-radius: 10px 10px 0 0;
  }
  .contact-form-wrapper {
    border-radius: 0 0 10px 10px;
  }
}
@media only screen and (max-width: 400px) {
  .contact-box {
    width: 95%;
    margin: 8% 5%;
  }
}
  m
h2 {
  font-family: 'Arimo', sans-serif;
  color: #fff;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  transform: scale(.95, 1);
}
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
}
.link {
  margin: 10px;
  cursor: pointer;
}
#img {
  width: 45px;
  height: 45px;
  filter:
    hue-rotate(220deg)
    drop-shadow(2px 4px 4px #0006);
  transition: 0.2s;
  user-select: none;
}
img:hover {
  transform: scale(1.1, 1.1);
}
img:active {
  transform: scale(1.1, 1.1);
  filter:
    hue-rotate(220deg)
    drop-shadow(2px 4px 4px #222)
    sepia(0.3);
}
.form-item {
  position: relative;
}
label, input, textarea {
  font-family: 'Poppins', sans-serif;
}
label, input, textarea {
  font-family: 'Poppins', sans-serif;
}
label {
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
}
input, textarea {
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
}
input:focus+label,
input:valid+label,
textarea:focus+label,
textarea:valid+label {
  font-size: clamp(13px, 1.3vw, 16px);
  color: #777;
  top: -20px;
  transition: all .225s ease;
}
.submit-btn {
  background-color: #ECF71F;
  filter: drop-shadow(2px 2px 3px #0003);
  color: #fff;
  font-family: "Poppins",sans-serif;
  font-size: clamp(16px, 1.6vw, 18px);
  display: block;
  padding: 12px 20px;
  margin: 2px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  border-radius: 7px;
}
.submit-btn:hover {
  transform: scale(1.1, 1.1);
}
.submit-btn:active {
  transform: scale(1.1, 1.1);
  filter: sepia(0.5);
}
@media only screen and (max-width: 800px) {
  h2 {
    font-size: clamp(40px, 10vw, 60px);
  }
}
@media only screen and (max-width: 400px) {
  h2 {
    font-size: clamp(30px, 12vw, 60px);
  }
  .links {
    padding-top: 30px;
  }
  img {
    width: 38px;
    height: 38px;
  }
}
.info {
  margin: 20px 0;
  text-align: center;
}
p {
  color: #2E2E2E;
  margin-bottom: 20px;
}
/* block-$ */
.block-effect {
  font-size: calc(8px + 6vw);
}
.block-reveal {
  --t: calc(var(--td) + var(--d));
  color: transparent;
  padding: 4px;
  position: relative;
  overflow: hidden;
  animation: revealBlock 0s var(--t) forwards;
}
.block-reveal::after {
  content: '';
  width: 0%;
  height: 100%;
  padding-bottom: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards, revealingOut var(--td) var(--t) forwards;
}
@keyframes revealBlock {
  100% {
    color: #0F0F0F;
  }
}
@keyframes revealingIn {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes revealingOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
.abs-site-link {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: hsla(0, 0%, 0%, .6);
  font-size: 16px;
}
span{
  color:#086efc;
}
</style>
