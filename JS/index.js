var arr1 = ['"Do not take life too seriously. You will not get out alive."','"You miss 100% of the shots you don t take."','"Resentment is like drinking poison and waiting for your enemies to die."',

'"The best revenge is massive success."','"It s not what happens to you, but how you react to it that matters."']


var arr2 =["--Elbert Hubbard","--Wayne Gretzy","--Nelson Mandela",'--Frank Sinatra',"--Epictetus",]

function display(){
    var container=Math.floor(Math.random()*arr1.length)
    document.getElementById('line1').innerHTML=arr1[container]
    document.getElementById('line2').innerHTML=arr2[container]
}