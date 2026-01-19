let canvas;
let context;
//distance formula used: sqrt(((x2-x1) ^2) + ((y2-y1) ^ 2) )

//to get the x change value and the y change for a single unit, I took the change in x and the change in y and divided them sepreatly
//this will get the value of each distance value for x and for y

let backgroundImage = new Image();

let playerWalkImage = new Image();
let playerIdleImage = new Image();
let playerShootingImage = new Image();

let zombieImage = new Image();

let gunImage = new Image();

let GhostIdleImage = new Image();
let GhostWalkImage = new Image();

let soldierWalkImage = new Image();

let bossImage = new Image();
let bombIdleImage = new Image();
let bombExplodeImage = new Image();

let bulletImage = new Image();
let obsticleImage = new Image();

let FreezeMonsterImage = new Image();
let HalfMonsterHealthImage = new Image();
let DoubleDamageImage = new Image();
let InvinsibilityImage = new Image();

let backgroundSound = new Audio();





let fpsInterval = 1000 / 15;


let then = Date.now();

let request_id;

let background1 = [
    [17, 70, 71, 17, 17, 17, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 71],
    [12, 70, 71, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 70, 33, 22, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 77, 32, 34, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [88, 70, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 20, 12, 12, 12, 12, 12, 5, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 71, 70, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [70, 72, 72, 72, 82, 72, 72, 89, 72, 72, 72, 72, 72, 72, 70, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 12, 12, 12, 12, 12],
    [12, 12, 12, 72, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 20, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 8, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 50, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 82, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 82, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 82, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 71]
];
let background2 = [
    [80, 17, 17, 59, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 57, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [70, 70, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 70, 33, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 69, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 77, 32, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [88, 70, 12, 59, 12, 12, 12, 12, 92, 52, 52, 52, 52, 52, 57, 92, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 20, 12, 59, 12, 12, 12, 51, 92, 50, 52, 52, 52, 52, 87, 92, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 71, 70, 59, 12, 12, 12, 12, 55, 52, 52, 52, 52, 12, 17, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [10, 12, 12, 58, 12, 12, 12, 59, 52, 52, 52, 52, 52, 11, 17, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [17, 17, 17, 57, 17, 17, 17, 57, 57, 57, 57, 57, 57, 57, 17, 17, 17, 59, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [12, 12, 12, 59, 12, 12, 12, 59, 59, 12, 12, 2, 12, 12, 17, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 60, 20, 12, 12, 59, 12, 12, 12, 12, 12, 12, 17, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 77, 12, 8, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 58, 12, 50, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 67, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 59, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 58, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [17, 17, 17, 59, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 90, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [12, 12, 12, 58, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 77, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 59, 82, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 79, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 59, 82, 12, 12, 12, 12, 12, 12, 12, 12, 12, 17, 12, 12, 83, 12, 12, 82, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    [17, 17, 17, 59, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
];
let currentBackground = background1;

let tilesPerRow = 6;
let tileSize = 16;

let monsters = [];
let bullets = [];
let gun = [];
let lasers = [];
let bossBombs = [];
let obsticles = [];
let round = 1;
let boss_zombie = null;
let cheat_enabled = false;
let bullet_damage = 10;
let max_player_health = 100;
let max_boss_health = 150;
let isShooting = false;
let player_shoot_frame_counter = 0;
let powerUp_types = [{type: "Freeze Monster", x: 0, y: 0, size: 25, time_since_picked: 0, powerUp_Implimented: false},
                    {type: "Half Monster Health", x: 0, y: 0, size: 25, time_since_picked: 0, powerUp_Implimented: false},
                    {type: "Double Damage", x: 0, y: 0, size: 25, powerUp_Implimented: false},
                    {type: "Invinsibility", x: 0, y: 0, size: 25, time_since_picked: 0, powerUp_Implimented: false}
];
let powerUp_Map = [];
let powerUp_On_Player = [];
let monsterFreeze = false;

let player = {
    x: 256,
    y: 160,
    size: 32,
    xChange: 0,
    yChange: 0,
    frameX: 0,
    frameY: 0,
    health: 100,
    score: 0,
    coins: 0,
    isImortal: false
};

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;
let gun_placement = null;

document.addEventListener("DOMContentLoaded", init, false);
let xhttp;





function init() {
    canvas = document.querySelector("canvas");
    if (canvas){
        context = canvas.getContext("2d");
        if (localStorage.getItem("round")) {
    
            round = Number(localStorage.getItem("round"));
            player.health = Number(localStorage.getItem("health"));
            if (player.health <= 0){
                stop("You Lose");
            }
            player.coins = Number(localStorage.getItem("coins"));
            player.score = Number(localStorage.getItem("score"));
            max_player_health = Number(localStorage.getItem("playerMaxHealth"));
            bullet_damage = Number(localStorage.getItem("bulletDamage"));
            //curl: https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
            localStorage.clear()
            //url: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            //url: https://www.w3schools.com/jsref/prop_win_localstorage.asp
        }
    
        


        window.addEventListener("keydown", playerMove, false);
        window.addEventListener("keyup", stopPlayerMove, false);
        window.addEventListener("click", shoot, false);
        window.addEventListener("keydown", reload, false);
        window.addEventListener("keydown", cheat, false);
        window.addEventListener('click',  redirect, false);
        generate_obsticles(5);

        generate_Zombie_per_Round(round);



        
        
        display_gun();
        display_health();
        display_coins();
        display_score();
        

        load_asset([
            {"var": playerWalkImage, "url": "Images/Apocalypse_Character/Player/Walk.png"},
            {"var": playerIdleImage, "url": "Images/Apocalypse_Character/Player/Idle.png"},
            {"var": backgroundImage, "url": "Images/Pixel Art Top Down - Basic v1/Texture/TX Tileset Grass.png"},
            {"var": zombieImage, "url": "Images/Apocalypse_Character/Zombie/Walk.png"},
            {"var": gunImage, "url": "Images/FreePixelGunPack/Guns/1.png"},
            {"var": GhostIdleImage, "url": "Images/PIPOYA FREE RPG Character Sprites 32x32/Enemy/Enemy 10-1.png"},
            {"var": soldierWalkImage, "url": "Images/PIPOYA FREE RPG Character Sprites 32x32/Soldier/Soldier 04-1.png"},
            {"var": bulletImage, "url": "Images/Apocalypse_Character/Player/Bullet.png"},
            {"var": bossImage, "url": "Images/PIPOYA FREE RPG Character Sprites 32x32/Boss/Boss 01.png"},
            {"var": bombIdleImage, "url": "Images/bomb_character_o_idle.png"},
            {"var": bombExplodeImage, "url":"Images/bomb_character_o_explode.png"},
            {"var": playerShootingImage, "url": "Images/Apocalypse_Character/Player/Shoot.png"},
            {"var": backgroundSound, "url": "Images/sound/background_sound.mp3"},
            {"var": FreezeMonsterImage, "url": "Images/more-energy-cans/Monster- Wei·.png"},//white monster can
            {"var": HalfMonsterHealthImage, "url": "Images/more-energy-cans/Monster-Gelb.png"},//yellow monster can
            {"var": DoubleDamageImage, "url": "Images/more-energy-cans/Monster-GrÅn.png"},//green monster can
            {"var": InvinsibilityImage, "url": "Images/more-energy-cans/Monster-Energy.png"},//original monster can
            {"var": obsticleImage, "url": "Images/Pixel Art Top Down - Basic v1/Texture/TX Props.png"}
        ], draw);
    }
    let player_health_temp = localStorage.getItem("playerMaxHealth");
    let bullet_damage_temp = localStorage.getItem("bulletDamage");

    let form_health_id = document.querySelector("#upgrade-health");
    if (form_health_id){
        form_health_id.value = player_health_temp;
    }
    let form_bullet_id = document.querySelector("#upgrade-bullet-damage");
    if (form_bullet_id){
        form_bullet_id.value = bullet_damage_temp;
    }
    let coins_id = document.querySelector("#coins_upgrade");
    let coins_temp = localStorage.getItem("coins");
    coins_id.innerHTML = "Coins:" + coins_temp;

    let form_health = document.querySelector("#form_health");
    form_health.addEventListener("submit", player_upgrade, false);
    let form_bullet = document.querySelector("#form_bullet");
    form_bullet.addEventListener("submit", player_upgrade, false);
    
}
    


function draw(){
    backgroundSound.play();
    request_id = window.requestAnimationFrame(draw);
    let now = Date.now();
    //url: https://www.w3schools.com/jsref/met_audio_play.asp#:~:text=The%20play()%20method%20starts,%2C%20attached%20on%20the%20audio).
    let elapsed = now - then;
    if (elapsed <= fpsInterval){
        return;
    }
    then = now - (elapsed % fpsInterval);

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#a9b19d";
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let r = 0; r < 20; r += 1) {
        for (let c = 0; c < 32; c +=1) {
            let tile = currentBackground[r][c];
            if (tile >= 0 ){
                let tileRow = Math.floor(tile / tilesPerRow);
                let tileCol = Math.floor(tile % tilesPerRow);
                context.drawImage(backgroundImage,
                    tileCol * tileSize, tileRow * tileSize, tileSize, tileSize,
                    c * tileSize, r * tileSize, tileSize, tileSize
                );
            }
        }
    }

    if (gun_placement === null){
        generate_gun();
    }
    else{
        context.fillStyle = "black";
        context.drawImage(gunImage,
            gun_placement.x, gun_placement.y, 40, 30)
    }
    player_pickUp(player, gun_placement);

    for (let powerIndex = (powerUp_Map.length - 1); powerIndex > -1; powerIndex--){
        context.fillStyle = "blue";
        if (powerUp_Map[powerIndex].type === "Freeze Monster"){
            context.drawImage(FreezeMonsterImage,
                0, 0, powerUp_Map[powerIndex].size + 5, powerUp_Map[powerIndex].size + 5,
                powerUp_Map[powerIndex].x, powerUp_Map[powerIndex].y, powerUp_Map[powerIndex].size, powerUp_Map[powerIndex].size
            );
        }
        else if (powerUp_Map[powerIndex].type === "Half Monster Health"){
            context.drawImage(HalfMonsterHealthImage,
                0, 0, powerUp_Map[powerIndex].size + 5, powerUp_Map[powerIndex].size + 5,
                powerUp_Map[powerIndex].x, powerUp_Map[powerIndex].y, powerUp_Map[powerIndex].size, powerUp_Map[powerIndex].size
            );
        }
        else if (powerUp_Map[powerIndex].type === "Double Damage"){
            context.drawImage(DoubleDamageImage,
                0, 0, powerUp_Map[powerIndex].size + 5, powerUp_Map[powerIndex].size + 5,
                powerUp_Map[powerIndex].x, powerUp_Map[powerIndex].y, powerUp_Map[powerIndex].size, powerUp_Map[powerIndex].size
            );
        }
        else{
            context.drawImage(InvinsibilityImage,
                0, 0, powerUp_Map[powerIndex].size, powerUp_Map[powerIndex].size,
                powerUp_Map[powerIndex].x, powerUp_Map[powerIndex].y, powerUp_Map[powerIndex].size, powerUp_Map[powerIndex].size
            );
        }


        if (powerUp_pickup(player, powerUp_Map[powerIndex])){
            powerUp_Map.splice(powerIndex, 1);
        }
    }
    for (let powerIndex = (powerUp_On_Player.length - 1); powerIndex > -1; powerIndex--){
        if (handle_powerUp(powerUp_On_Player[powerIndex])){
            powerUp_On_Player.splice(powerIndex, 1);
        }
    }
    display_powerUp();
    
    
    
    

    context.fillStyle = "cyan";
    if (moveDown || moveLeft || moveRight || moveUp){
        context.drawImage(playerWalkImage,
            player.frameX * player.size, player.frameY * player.size, player.size, player.size,
            player.x, player.y, player.size, player.size);
        
            if ((moveLeft || moveRight || moveUp || moveDown) && !((moveLeft && moveRight) || (moveUp && moveDown))){
                player.frameX = (player.frameX + 1) % 3;
            }
    }
    else{
        context.drawImage(playerIdleImage,
            player.frameX * player.size, player.frameY * player.size, player.size, player.size,
            player.x, player.y, player.size, player.size);
            player.frameX = (player.frameX + 1) % 2;
    }
    if (isShooting === true){
        if (player_shoot_frame_counter < 2){
            context.drawImage(playerShootingImage,
                player.frameX * player.size, player.frameY * player.size, player.size, player.size,
                player.x, player.y, player.size, player.size);
            player.frameX = (player.frameX + 1) % 2;
            player_shoot_frame_counter += 1;
            }
        else{
                player_shoot_frame_counter = 0;
                player.frameX = 0;
                isShooting = false;
            }      
        
    }



    for (let obs of obsticles) {
        context.fillStyle = "brown";
        context.drawImage(obsticleImage,
            30, 20, 40, 40,
            obs.x, obs.y, obs.size, obs.size
        );
        
        obsticle_collision(player, obs);
    }
        

    for (let z of monsters) {

        if (z.type === "Normal") {
            context.drawImage(zombieImage,
                z.frameX * z.size, z.frameY * z.size, z.size, z.size,
                z.x, z.y, z.size, z.size);
            z.frameX = (z.frameX + 1) % 10;
            monsterMove(player, z);
        }
        else if (z.type === "Ghost") {
            
            if (now-z.last_time_teleported >= 8000 && now-z.last_time_teleported <= 9000){
                z.previous_player_X = player.x;
                z.previous_player_Y = player.y;
            }
            if (now - z.last_time_teleported >= 10000 && monsterFreeze === false) {
                z.x = z.previous_player_X;
                z.y = z.previous_player_Y;
                z.last_time_teleported = Date.now();
            }
            zombieAttack(player, z)
  
            context.fillStyle = "green"
            context.drawImage(GhostIdleImage,
                z.frameX * z.size, z.frameY * z.size, z.size, z.size,
                z.x, z.y, z.size, z.size);
            z.frameX = (z.frameX + 1) % 3;
        }
        else if (z.type === "Soldier") {

            let distance = Math.sqrt(((z.x-player.x) ** 2) + ((z.y-player.y) ** 2))
            if (distance > 200) {
                context.drawImage(soldierWalkImage,
                    z.frameX * z.size, z.frameY * z.size, z.size, z.size,
                    z.x, z.y, z.size, z.size);
                z.frameX = (z.frameX + 1) % 3;
                monsterMove(player, z);
            }
            else {

                context.drawImage(soldierWalkImage,
                    z.frameX * z.size, z.frameY * z.size, z.size, z.size,
                    z.x, z.y, z.size, z.size);
                soldierAttack(player, z);
            }
            
        }
        for (let o of obsticles){
            obsticle_collision(z, o);
        }
    }

    

    if (moveLeft){
        if (player.xChange <= 10){
            player.xChange -= 1;
            player.frameY = 3;
        }
    }
    if (moveRight){
        if (player.xChange <= 10){
            player.xChange += 1;
            player.frameY = 2;
        }
    }
    if (moveUp){
        if (player.yChange <= 10){
            player.yChange -= 1;
            player.frameY = 1;
        }
    }
    if (moveDown){
        if (player.yChange <= 10){
            player.yChange += 1;
            player.frameY = 0;
        }
    }

    player.x += player.xChange;
    player.y += player.yChange;

    player.xChange *= 0.8;
    player.yChange *= 0.8;

    if (player.x + player.size < 0) {
        player.x = canvas.width;
    }
    else if (player.x > canvas.width){
        player.x = -player.size;
    }
    if (player.y + player.size < 0) {
        player.y = canvas.height;
    }
    else if (player.y > canvas.height) {
        player.y = -player.size;
    }

    context.fillStyle = "red";
    if (bullets.length > 0){
        for (let b of bullets){
            b.x += b.dirx * b.speed;
            b.y += b.diry * b.speed;
            context.drawImage(bulletImage,
                0, 0, 20, 20,
                b.x, b.y, b.size, b.size);
        }
    }
    if (lasers.length > 0){
        for (let index = (lasers.length - 1); index >= 0; index--){
            let a = lasers[index];
            a.x += a.dirx * a.speed;
            a.y += a.diry * a.speed;
            context.fillRect(a.x, a.y, a.size, a.size);
            
            if (laserCollision(a, player)) {
                lasers.splice(index, 1);
            }
        }
    }


    for (let bulletIndex = (bullets.length - 1); bulletIndex >= 0; bulletIndex--) {
        for (let monsterIndex = (monsters.length - 1); monsterIndex >= 0; monsterIndex--) {
            if (bulletCollision(bullets[bulletIndex], monsters[monsterIndex])) {
                bullets.splice(bulletIndex, 1);
                if (check_monster_health(monsters[monsterIndex], player)) {
                    if (monsters[monsterIndex].type === "Normal"){
                        player.coins += randint(5, 10);
                    }
                    else if (monsters[monsterIndex].type === "Ghost"){
                        player.coins += randint(5, 15);
                    }
                    else if (monsters[monsterIndex].type === "Soldier"){
                        player.coins += randint(10, 20);
                    }
                    monsters.splice(monsterIndex, 1);
                display_coins();
                }
            }
        }
    }

    if (boss_zombie != null){
        context.fillStyle = "red"
        context.drawImage(bossImage,
            boss_zombie.frameX * boss_zombie.frameSize, boss_zombie.frameY * boss_zombie.frameSize, boss_zombie.frameSize, boss_zombie.frameSize,
            boss_zombie.x, boss_zombie.y, boss_zombie.size, boss_zombie.size);
        if (monsterFreeze === false){
            boss_zombie.frameX = (boss_zombie.frameX + 1) % 3;        
            if (Date.now() - boss_zombie.last_time_attacked > 5000){
                bossZombieAttack(boss_zombie);
                boss_zombie.last_time_attacked = Date.now();
            }
        }




        for (let bulletIndex = (bullets.length -1); bulletIndex >= 0; bulletIndex--){
            let collision = bulletCollision(bullets[bulletIndex], boss_zombie);
            if (collision){
                bullets.splice(bulletIndex, 1);
                display_boss_health();
            }
            
        }
        
        for (let bombindex = (bossBombs.length-1); bombindex >= 0; bombindex--){
            //url: https://stackoverflow.com/questions/9882284/looping-through-array-and-removing-items-without-breaking-for-loop
            context.drawImage(bombIdleImage,
                bossBombs[bombindex].frameX * bossBombs[bombindex].size, 0, bossBombs[bombindex].size, bossBombs[bombindex].size,
                bossBombs[bombindex].x, bossBombs[bombindex].y, bossBombs[bombindex].size, bossBombs[bombindex].size);
            bossBombs[bombindex].frameX = (bossBombs[bombindex].frameX + 1) % 2;
            if(bomb_explode(player, bossBombs[bombindex])){
                for (let i = 0; i < 3; i ++){
                    context.drawImage(bombExplodeImage,
                        bossBombs[bombindex].frameX * bossBombs[bombindex].size, 0, bossBombs[bombindex].size, bossBombs[bombindex].size,
                        bossBombs[bombindex].x, bossBombs[bombindex].y, bossBombs[bombindex].size, bossBombs[bombindex].size)
                        bossBombs[bombindex].frameX = (bossBombs[bombindex].frameX + 1) % 3;
                }
                bossBombs.splice(bombindex, 1);
            }
        }
        

                
               
        if (check_monster_health(boss_zombie, player)){
            boss_zombie = null;
            let healthTitle = document.querySelector("#bossHealthTitle");
            healthTitle.innerHTML = "";
            display_score();
            let health_bar = document.querySelector("#boss_health");
            health_bar.remove();
            //url: https://www.w3schools.com/jsref/met_element_remove.asp
            stop("You Win");
            
        }  
    }   
    
    
    for (let index=(bullets.length-1); index >= 0; index--){
        if ((0 >= bullets[index].x || bullets[index].x >= canvas.width) || (0 >= bullets[index].y || bullets[index].y >= canvas.height)){
            bullets.splice(index, 1);
            
        }
    }
    for (let index=(lasers.length-1); index >= 0; index--){
        if ((0 >= lasers[index].x || lasers[index].x >= canvas.width) || (0 >= lasers[index].y || lasers[index].y >= canvas.height)){
            lasers.splice(index, 1);
            
        }
    }

    if (monsters.length <= 0 && boss_zombie === null){
        round += 1;
        generate_Zombie_per_Round(round);
    }




}

function playerMove(event){
    let key = event.key;
    if (key === "ArrowLeft" ||
        key === "ArrowRight" ||
        key === "ArrowUp" ||
        key === "ArrowDown"
    )
    {
        event.preventDefault();
    }
    if (key === "ArrowLeft"){
        moveLeft = true;
    }
    if (key === "ArrowRight"){
        moveRight = true;
    }
    if (key === "ArrowUp"){
        moveUp = true;
    }
    if (key === "ArrowDown"){
        moveDown = true;
    }
}

function stopPlayerMove(event){
    let key = event.key;
    if (key === "ArrowLeft"){
        moveLeft = false;
    }
    if (key === "ArrowRight"){
        moveRight = false;
    }
    if (key === "ArrowUp"){
        moveUp = false;
    }
    if (key === "ArrowDown"){
        moveDown = false;
    }
}




function shoot(event) {
    event.preventDefault()
    if (gun.length>0){
        if (gun[0].in_chamber > 0){

            if (cheat_enabled === false){
                gun[0].in_chamber -= 1;
            }
            let canvasRect = canvas.getBoundingClientRect();
            let mouseX = event.clientX - canvasRect.left;
            let mouseY = event.clientY - canvasRect.top;
            //url: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
            //url: https://www.w3schools.com/jsref/event_offsetx.asp
            //url: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect



            let dirX = mouseX - (player.x + player.size / 2);
            let dirY = mouseY - (player.y + player.size / 2);
            let distance = Math.sqrt(dirX ** 2 + dirY ** 2);

            

            dirX /= distance;
            dirY /= distance;


            let bullet = {
                x: (player.x + player.size / 2), 
                y: (player.y + player.size / 2), 
                size: 10,                        
                speed: 5,
                frameX: 3,
                frameY: 1,                       
                dirx: dirX,                     
                diry: dirY,
                damage: bullet_damage                     
            };

            isShooting = true;
            bullets.push(bullet);

        }
        else {
            if (gun[0].ammo <= 0){
                gun.splice(0, 1);
            }
        }
        display_gun();
    }
}

//GUN
function reload(event){
    let key = event.key;
    if (gun.length > 0){
        if (key === "r" && cheat_enabled === false) {
            event.preventDefault();
            //url: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            // to check what the key will be pressed
            if (gun.length > 0) {
                let gun_type = gun[0];
                if (gun_type.ammo > 0) {
                    gun_type.in_chamber = 6;
                    gun_type.ammo -= 6;
                }
            }
        }
    }
    display_gun();
}



function generate_gun(){
    let gun_placement_x = 0;
    let gun_placement_y = 0;
    let placement = generate_placement(10);
    gun_placement_x = placement[0]
    gun_placement_y = placement[1]
    gun_placement = {
        x: gun_placement_x,
        y: gun_placement_y,
        size: 10,
        in_chamber: 6,
        ammo: 60

    };

}

function display_gun(){
    let gun_id = document.querySelector("#gun");
    if (cheat_enabled === true){
        gun_id.innerHTML = "UNLIMITED";
    }
    else if (gun.length > 0){
        gun_id.innerHTML = gun[0].in_chamber + "/" + gun[0].ammo;
    }
    else{
        gun_id.innerHTML = "No gun In hand";
    }
}

function display_health(){
    let health_id = document.querySelector("#player-health-bar");
    if (cheat_enabled === true){
        health_id.value = "100";
        health_id.innerHTML = "100%";
    }
    else if (player.health > 0){
        let health_percent;
        health_percent = (player.health/max_player_health)*100;
        health_id.value = health_percent;
        health_id.innerHTML = health_percent+"%";
    }
    else{
        health_id.value = 0;
        stop("Game Over");
    }
    //https://www.youtube.com/watch?v=UI-Qa2-tY10
    //1:27 - 2:39
}

function display_boss_health(){
    let boss_health_id = document.querySelector("#boss_health");
    if (boss_zombie.health > 0){
    let health_percent = (boss_zombie.health/max_boss_health)*100;
    boss_health_id.value = health_percent;
    }
    else{
        boss_health_id.value = 0;
    }
}

function display_coins(){
    let coins_id = document.querySelector("#coins");
    if (cheat_enabled === true){
        coins_id.innerHTML = "UNLIMITED";
    }
    else{
        coins_id.innerHTML = player.coins;
    }
}

function display_score(){
    let score_id = document.querySelector("#score");
    score_id.innerHTML = player.score;
}

function player_pickUp(p, g){
    if (collision(p, g)) {
        if (gun.length === 0) {
            gun.push(gun_placement);
            gun_placement = null;
            display_gun();
            return true;
        }
    }
    return false;
}

function randint(min, max){
    return Math.floor(Math.random() * (max-min + 1))+min;
}
function bulletCollision(b, z){
    if (collision(b, z)){
        z.health -= b.damage;
        return true;
    }
    return false;
}

//Zombie
function zombieAttack(p, z) {
    if (collision(p, z)) {

        if (cheat_enabled === false && player.isImortal === false) {
            if (z.type === "Noraml"){
                p.health -= 10; 
            }
            else{
                p.health -= 20;
            }
        } 
        
        let dirX = p.x - z.x;
        let dirY = p.y - z.y;
        
        let distance = Math.sqrt(dirX ** 2 + dirY ** 2);
        
        dirX /= distance;
        dirY /= distance;
        
        
        p.xChange += dirX * 5;
        p.yChange += dirY * 5;

        if (dirX === 0 || dirY === 0){
            p.xChange = 10;
        }

        display_health();
    }
    return false;
}

function monsterMove(p, z){

    if (monsterFreeze === false){
        let dirX = p.x - z.x;
        let dirY = p.y - z.y;

        let distance = Math.sqrt(dirX ** 2 + dirY ** 2);
        dirX /= distance;
        dirY /= distance;
        

        z.x += dirX * z.speed;
        z.y += dirY * z.speed;
        if (z.type === "Normal"){
            if (dirY < 0 && dirX === 0){
                z.frameY = 1;
            }
            else if (dirY > 0 && dirX === 0){
                z.frameY = 0;
            }
            else if (dirX < 0 ){
                z.frameY = 3;
            }
            else if(dirX > 0 ){
                z.frameY = 2;
            }
        }
        
        else{
            if (dirY < 0 && dirX === 0){
                z.frameY = 3;
            }
            else if (dirY > 0 && dirX === 0){
                z.frameY = 0;
            }
            else if (dirX < 0 ){
                z.frameY = 1;
            }
            else if(dirX > 0 ){
                z.frameY = 2;
            }
        
        }

        if (z.type === "Normal")
        {  
            zombieAttack(p, z);  
        }
    }
}




function check_monster_health(z, player){
    if (z.health <= 0){
        if (z.type === "Normal"){
            player.score += 1;
        }
        else if (z.type === "Soldier"){
            player.score += 2;
        }
        else if (z.type === "Mutant"){
            player.score += 3;
        }
        else{
            player.score += 10
        }
        display_score();
        return true;
    }
    return false;
}

//ZOMBIE
function generate_Zombie(num_of_monsters){
    for (let i = 0; i < Number(num_of_monsters); i++){
        let zombie_placement_x = 0;
        let zombie_placement_y = 0;
        let placement = generate_placement(32);
        zombie_placement_x = placement[0];
        zombie_placement_y = placement[1];

    
        let Zombie = {type: "Normal",
            x: zombie_placement_x,
            y: zombie_placement_y,
            frameX: 0,
            frameY: 0,
            size: 32,
            health: 20,
            speed: 0.35
        };
        monsters.push(Zombie);
    }
}




//Ghost
function generate_Ghost() {
    let ghost_placement_x = 0;
    let ghost_placement_y = 0;
    let placement = generate_placement(32);
    ghost_placement_x = placement[0];
    ghost_placement_y = placement[1];

    let Ghost = {type: "Ghost",
        x: ghost_placement_x,
        y: ghost_placement_y, 
        frameX: 0,
        frameY: 0,
        health: 75,
        size: 32,
        last_time_teleported: Date.now(),
        previous_player_X: 0,
        previous_player_Y: 0
    };
    monsters.push(Ghost);
}


//SOLDIER
function generate_soldier(num_of_soldiers){
    for (let i=0; i < num_of_soldiers; i++){
        let soldier_placement_x = 0;
        let soldier_placement_y = 0;
        let placement = generate_placement(32);
        soldier_placement_x = placement[0];
        soldier_placement_y = placement[1];

    
        let Soldier = {
            type: "Soldier",
            x: soldier_placement_x,
            y: soldier_placement_y,
            damage: 20,
            health: 50,
            frameX: 0,
            frameY: 0,
            size: 32,
            speed: 1,
            last_time_attacked: Date.now()
        };
        monsters.push(Soldier);
    }
}

function soldierAttack(p, s){

    let dirX = (p.x + p.size / 2) - (s.x + s.size / 2);
    let dirY = (p.y + p.size / 2) - (s.y + s.size / 2);
    let distance = Math.sqrt(dirX ** 2 + dirY ** 2);

    dirX /= distance;
    dirY /= distance;

    
    if (dirX < 0){
        s.frameY = 1;
    }
    else{
        s.frameY = 2;
    }

    if (monsterFreeze === false){
        if (Date.now() - s.last_time_attacked >= 3000){
            let laser = {
                x: (s.x + s.size / 2), 
                y: (s.y + s.size / 2), 
                size: 3,                        
                speed: 5,                       
                dirx: dirX,                     
                diry: dirY,
                damage: 10                     
            };
            lasers.push(laser);
            s.last_time_attacked = Date.now();
        }
    }
}

function laserCollision(a, p){
    if (collision(a, p)){
        if (cheat_enabled === false || player.isImortal === false){
            p.health -= 20;
        }
        display_health();
        return true;
    }
    return false;
}


//BOSS ZOMBIE
function generate_Boss_Zombie(){
    boss_zombie = {x: canvas.width/2,
                y: canvas.height/2,
                health: 150,
                size: 70,
                frameX: 0,
                frameY: 1,
                frameSize: 97,
                last_time_attacked: Date.now()
    };
    
    let health_element = document.querySelector("#bossHealth");
    let healthTitle = document.querySelector("#bossHealthTitle");
    healthTitle.innerHTML = "BOSS HEALTH";
    let new_progress_bar = document.createElement("progress");
    new_progress_bar.value = 100;
    new_progress_bar.max = 100;
    new_progress_bar.id = "boss_health";
    health_element.appendChild(new_progress_bar);
}

function bossZombieAttack(){
    bossBombs = [];
    for (let i = 0; i < 5; i++){
        let bomb = {
            x: randint(0, canvas.width-60),
            y: randint(0, canvas.height-60),
            frameX: 0,
            time_placed: Date.now(),
            size: 60
        };
        bossBombs.push(bomb);
    }
}

function bomb_explode(player, bomb){
    if (Date.now() - bomb.time_placed >= 2000){
        let distance = Math.sqrt(((bomb.x-player.x) ** 2) + ((bomb.y-player.y) ** 2));
        if (distance < 50 && cheat_enabled === false && player.isImortal === false){
            player.health -= 20;
            display_health()
        
            
        }
        let dirX = player.x - bomb.x;
        let dirY = player.y - bomb.y;
        dirX /= distance;
        dirY /= distance
        player.xChange = dirX * 5;
        player.yChange = dirY * 5;

        return true;
    }
    return false;
}

function generate_powerUp(){
    let selected_powerUp = powerUp_types[randint(0, 3)];
    let powerUp_placement_x = 0;
    let powerUp_placement_y = 0;
    let placement = generate_placement(selected_powerUp.size);
    powerUp_placement_x = placement[0];
    powerUp_placement_y = placement[1];

    let new_powerUp = {
        type: selected_powerUp.type,
        x: powerUp_placement_x,
        y: powerUp_placement_y,
        size: selected_powerUp.size,
        time_since_picked: Date.now(),
        powerUp_Implimented: selected_powerUp.powerUp_Implimented
    }
    powerUp_Map.push(new_powerUp);
}
function powerUp_pickup(p, powerUp){
    if (collision(p, powerUp)) {
        for (let i = 0; i < powerUp_On_Player.length; i++){
            if (powerUp.type === powerUp_On_Player[i].type){
                powerUp_On_Player[i].time_since_picked = Date.now();
                return true
            }
        }
        powerUp.time_since_picked = Date.now();
        
        powerUp_On_Player.push(powerUp);
        return true;
    }
    else{
        return false;
    }
}
function handle_powerUp(powerUp){

    let powerUp_id = document.querySelector("#powerUp");
    if (powerUp.type === "Freeze Monster"){

        if (Date.now() - powerUp.time_since_picked <= 20000){
            if (powerUp.powerUp_Implimented === false){
                monsterFreeze = true;
                powerUp.powerUp_Implimented = true;
            }
            return false;
        }
        else{
            monsterFreeze = false;
            powerUp_id.innerHTML = "";
            return true;
        }
    }
    else if (powerUp.type === "Half Monster Health"){

        if (Date.now() - powerUp.time_since_picked <= 20000){
            if (powerUp.powerUp_Implimented === false){
                for (let z of monsters){
                    z.health /= 2;
                }
                powerUp.powerUp_Implimented = true;
            }
            return false;
        }
        else{
            for (let z of monsters){
                z.health *= 2;
            }
            powerUp_id.innerHTML = "";
            return true;
        }
    }
    else if (powerUp.type === "Double Damage"){

        if (Date.now() - powerUp.time_since_picked <= 20000){
            if (powerUp.powerUp_Implimented === false){
                bullet_damage *= 2;
                powerUp.powerUp_Implimented = true;
            }
            return false;
        }
        else{
            bullet_damage /= 2;
            powerUp_id.innerHTML = "";
            return true;
        }
    }
    else{
        if (Date.now() - powerUp.time_since_picked <= 20000){
            if (powerUp.powerUp_Implimented === false){
                player.isImortal = true;
            }
            return false;
        }
        else{
            player.isImortal = false;
            powerUp_id.innerHTML = "";
            return true;
        }
        
    }
}
function display_powerUp(){
    let powerUp_id = document.querySelector("#powerUp");
    let powerUp_display = "";

    for (let powerUp of powerUp_On_Player){
        powerUp_display += String(powerUp.type + ":" + Math.floor((((powerUp.time_since_picked + 20000) - Date.now()))/1000) + " ");

    }

    //url: https://stackoverflow.com/questions/4228356/how-to-perform-an-integer-division-and-separately-get-the-remainder-in-javascr
    powerUp_id.innerHTML = powerUp_display;
}



function generate_Zombie_per_Round(round){
    generate_powerUp()
    if (round === 1){
        generate_Zombie(round*5);
        currentBackground = background1;
    }
    else if (round === 2){
        generate_Zombie((round*4)-2);
        generate_Ghost();
    }
    else if (round === 3){
        generate_Zombie((round*4)-4);
        generate_Ghost();
        generate_soldier(3);
    }
    else if (round === 4){
        generate_Zombie((round*4)-6);
        generate_Ghost();
        generate_soldier(4);
    }
    else if (round % 5 === 0){
        generate_Boss_Zombie();
    }
    else{
        generate_Zombie(5);
        generate_Ghost();
        generate_soldier(2);
        currentBackground = background2;
        for (let i = 0; i < round; i++)
            for (let m of monsters){
                m.health += 2;
        }
    }
    let round_id = document.querySelector("#round");
    round_id.innerHTML = round;
}

function cheat(event){
    let key = event.key
    if (key === "]"){
        event.preventDefault();
        player.coins = 100000000000;
        cheat_enabled = true;
        display_gun();
        display_health();
        display_coins();
        let upgrade_id = document.querySelector("#upgrade");
        upgrade_id.remove();
        if (gun.length <= 0){
            gun.push(gun_placement);
        }
        else{
            if(gun[0].in_chamber <=0){
                gun[0].in_chamber = 6;
            }
        }
    }
}

function redirect(event){
    event.preventDefault()
    if (event.target.tagName === 'A') {
        //url: https://www.w3schools.com/jsref/event_target.asp
    event.preventDefault();

    let url_id = event.target.id;
    let url = event.target.href;
    //url: https://www.w3schools.com/jsref/event_target.asp

    xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", handle_response, false);
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("User-Agent", "XMLHttpRequest");
    if (url_id === "upgrade"){

        localStorage.setItem("round", round);
        localStorage.setItem("health", player.health);
        localStorage.setItem("coins", player.coins);
        localStorage.setItem("score", player.score);
        localStorage.setItem("bulletDamage", bullet_damage);
        localStorage.setItem("cheatEnabled", cheat_enabled);
        localStorage.setItem("playerMaxHealth", max_player_health);
        //url: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        //url: https://www.w3schools.com/jsref/prop_win_localstorage.asp*/
    }
    xhttp.send(null);
    }
}


function player_upgrade(event) {
    event.preventDefault();
    let player_max_health_temp = Number(localStorage.getItem("playerMaxHealth"));
    let coins_temp = Number(localStorage.getItem("coins"));
    let bullet_damage_temp = Number(localStorage.getItem("bulletDamage"));

    
    let formID = event.target.id;
    //url: "https://www.devzery.com/post/closest-target"
    
    if (formID === "form_health") {
      if (player_max_health_temp >= 200) {
        document.querySelector("#upgrade-health").value = "MAX";
      } else if (coins_temp >= 20) {
        player_max_health_temp += 20;
        coins_temp -= 20; 
        document.querySelector("#upgrade-health").value = player_max_health_temp;
        document.querySelector("#coins_upgrade").innerHTML = "Coins : " + coins_temp;
      } else {
        document.querySelector("#health-errors").innerHTML = "Not Enough Coins";
      }
    } 
    else if (formID === "form_bullet"){ 
      if (bullet_damage_temp >= 50) { 
        document.querySelector("#upgrade-bullet-damage").value = "MAX";
      } else if (coins_temp >= 20) {
        bullet_damage_temp += 5; 
        coins_temp -= 20; 
        document.querySelector("#upgrade-bullet-damage").value = bullet_damage_temp;
        document.querySelector("#coins_upgrade").innerHTML = "Coins : " + coins_temp;
      } else {
        document.querySelector("#bullet-errors").innerHTML = "Not Enough Coins";
      }
    } 
    localStorage.setItem("playerMaxHealth", player_max_health_temp);
    localStorage.setItem("coins", coins_temp);
    localStorage.setItem("bulletDamage", bullet_damage_temp);
}

function generate_obsticles(num_of_obs){
    
    for (let i = 0; i < num_of_obs; i++){
        let obsticle = {
            x: randint(0, canvas.width-50),
            y: randint(0, canvas.height-50),
            size: 50
        };
        obsticles.push(obsticle);
    }
}

function obsticle_collision(p, obs) {
    if (collision(p, obs)) {
    

        let overlapX = Math.min(p.x + p.size - obs.x, obs.x + obs.size - p.x);
        let overlapY = Math.min(p.y + p.size - obs.y, obs.y + obs.size - p.y);
        
        if (overlapX < overlapY) {
            if (p.x < obs.x) {
                p.x = obs.x - p.size;
            } else {
                p.x = obs.x + obs.size;
            }
            p.xChange = 0;
        } else {
            if (p.y < obs.y) {
                p.y = obs.y - p.size;
            } else {
                p.y = obs.y + obs.size;
            }
            p.yChange = 0;
        }
        //used claude.ai to not allow the player to move through the obsticle
    }
}

function generate_placement(size) {
    let objX;
    let objY;
    let check = false;

    while (!check) {
        objX = randint(0, canvas.width - size);
        objY = randint(0, canvas.height - size);
        check = true;

        for (let obs of obsticles) {
            if (!(objX + size < obs.x || 
                  objX > obs.x + obs.size ||
                  objY + size < obs.y ||
                  objY > obs.y + obs.size)) {
                check = false;
            }
        }
    }

    return [objX, objY];
    //url: https://www.geeksforgeeks.org/javascript-return-multiple-values-from-function/
}

function collision(obj1, obj2){
    if (obj1.x < obj2.x + obj2.size &&
        obj1.x + obj1.size > obj2.x &&
        obj1.y < obj2.y + obj2.size &&
        obj1.y + obj1.size > obj2.y
    ){
        return true;
        }
    return false;
}
  
function handle_response() {

    if (xhttp.readyState === 4){

      if (xhttp.status === 200){

            
        window.location.href = xhttp.responseURL;
        //url: https://www.oncrawl.com/technical-seo/javascript-redirects-seo-ultimate-guide/#:~:text=The%20window.location.href%20method&text=%3B-,Window.,and%20therefore%20a%20redirection%20happens.
      }
        
    }
}


function load_asset(assets, callback) {
    let num_assets = assets.length;
    let loaded = function() {
        num_assets--;
        if (num_assets === 0) {
            callback(); 
        }
    }
    for (let asset of assets) {
        let element = asset.var;
        if (element instanceof HTMLImageElement) {
            element.addEventListener('load', loaded);
        }
        else if ( element instanceof HTMLAudioElement) {
            element.addEventListener("canplaythrough", loaded, false);
        }
        element.src = asset.url;
    }
}

function stop(message){

    let continue_id = document.querySelector("#continue");
    let outcome = document.querySelector("#outcome");
    window.removeEventListener("keydown", playerMove, false);
    window.removeEventListener("keyup", stopPlayerMove, false);
    window.removeEventListener("click", shoot, false);
    window.removeEventListener("keydown", reload, false);
    window.cancelAnimationFrame(request_id);
    if (message === "You Win"){
        continue_id = document.querySelector("#continue");
        let continue_button = document.createElement("button");
        continue_button.innerHTML = "Click the button within 10 seconds if you want to continue";
        continue_id.appendChild(continue_button);
        
        function ContinueGame(event){
            event.preventDefault();
            round += 1;
            window.addEventListener("keydown", playerMove, false);
            window.addEventListener("keyup", stopPlayerMove, false);
            window.addEventListener("click", shoot, false);
            window.addEventListener("keydown", reload, false);
            clearTimeout(timeout_id);
            outcome.innerHTML = "";
            continue_button.remove();
            obsticles = [];
            init();
            
        }
        continue_button.addEventListener("click", ContinueGame, false)
        //url: https://www.geeksforgeeks.org/how-to-add-event-listener-to-button-in-javascript/
            let timeout_id = setTimeout(() => {
                continue_button.removeEventListener("click", ContinueGame, false);
                continue_button.remove();
            }, 10000);
        
        
    //url: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
    //url: https://www.w3schools.com/jsref/met_win_settimeout.asp
        
    }
    let upgrade_id = document.querySelector("#upgrade");
    upgrade_id.remove();
    outcome.innerHTML=message;
    return;
}
//character: https://cuddle-bug.itch.io/apocalypse
//map: 