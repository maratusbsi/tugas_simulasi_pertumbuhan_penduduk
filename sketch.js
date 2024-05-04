let P = []; // dari solve()
let t = []; //dari solve()
let r; //Materi kelas: input user
let k = 300; //Tugas; r dan K input user

//ini juga bisa jadi input
let P0= 200;
let P1= 40;
let dt=0.1;
let tMax=10;
let grafik; //Chart JS


function setup() {
  createCanvas(400, 400);
  
  r = createInput('0.8'); //input default adalah 0.8
  r.position(20, 40)
  let p = createP('konstanta pertumbuhan') //teks biasa
  p.style('fontsize', '14px');
  p.position(20, 0);
  
  k = createInput('300'); 
  k.position(20, 80);
  let q = createP('Daya Pendukung');
  k.style('font-size', '14px');
  k.position(20, 60);
  
  solve();
  r.changed(solve);
  k.changed(() => {
    k = float(k.value()); 
    solve(); 
  });
  
  let ctx = document.getElementById('chart');
  grafik= new Chart(this, config);
  
  //baris program untuk merespon input user 
  solve(); // untuk inisiasi jalankan terlebih dahulu solve
  r.changed(solve);
  k.changed(solve);//jika input berganti, jalankan fungsi solve
}

function draw() {  
  stroke(0);
  noFill();
  beginShape();
  grafik.update();
}


function solve(){
  
  P[0]=P0;
  k[0]=P1;
  t[0]=0;
  let rs = float(r.value());
  let iterNum = int(tMax / dt);
  
  
  for (i=0; i < iterNum; i++){
    r[i+1] = r[i] + dt * r[i] * (1 -r[i]*k[i]/k)
    k[i+1] = k[i] + dt * r[i] * (1 - k[i]/k)
    t[i+1] = round((i + 1)*dt, 3);
  }
}