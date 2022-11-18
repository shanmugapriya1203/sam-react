
import './App.css';

function App() {
 
  const users= [  {
   fname:"Lion King",
   rating:"9/10",
    pic:"https://cdn.shopify.com/s/files/1/1057/4964/products/The-Lion-King-Vintage-Movie-Poster-Original-1-Sheet-27x41_600x.jpg?v=1665721273",
    detail:"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
},
{  fname:"Aladdin",
rating:"8.5/10",
   pic:"https://cdn.shopify.com/s/files/1/1057/4964/products/Aladdin-Vintage-Movie-Poster-Original-1-Sheet-27x41_600x.jpg?v=1640811654",
   detail:"A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
},
{
  fname:"Frozen",
  rating:"8/10",
  pic:"https://cdn.shopify.com/s/files/1/1057/4964/products/Frozen-Vintage-Movie-Poster-Original-1-Sheet-27x41_dcfcfac3-35a8-40b2-bc88-0f0b44120762_600x.jpg?v=1645671862",
  detail:"Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom."
},
{
fname:"Finding Nemo",
rating:"7/10",
pic:"https://cdn.shopify.com/s/files/1/1057/4964/products/Finding-Nemo-Vintage-Movie-Poster-Original-1-Sheet-27x41_e1acbdae-8ebe-4d11-b8d8-6046362c83da_600x.jpg?v=1652994179",
detail:"From the box-office sleeper, the player can play in this video game of trying to find and rescue Nemo."
},
{
  fname:"Cars",
  rating:"8/10",
  pic:"https://cdn.shopify.com/s/files/1/1057/4964/products/Cars-Vintage-Movie-Poster-Original-1-Sheet-27x41_d9140b26-0d6c-4557-b057-28a125393c3d_600x.jpg?v=1633582890",
  detail:"On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town, and learns that winning isn't everything in life. "

},
];

  return(
  <div className="App">
 {users.map((usr) => (
  <Welcome fname={usr.fname} rating={usr.rating} pic={usr.pic} detail={usr.detail}/>
  ))}
   </div>
  );
}
function Welcome({fname,rating,pic,detail}){

 
  return (

 <section>

<img className='movie-poster' src={pic} alt={fname}/>
<h1 className='user-name'>{fname}  <span className='rat'>&#9734;</span><span>{rating}</span></h1>
<p className='movie-detail'>{detail} </p>

 </section>

  );
}

export default App;
