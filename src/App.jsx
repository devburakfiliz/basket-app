
import { useState } from 'react';
import './App.css';
import Card from './component/card/Card';



function App() {

  const [product, setProduct] = useState([
    {
      id: 1,
      title: "MSI Anakart",
      image: "https://picsum.photos/id/0/5000/3333",
      info: "3.0 ghz",
      adet: 1,
    }, {
      id: 2,
      title: "RAM",
      image: "https://picsum.photos/id/1/5000/3333",
      info: "3.0 ghz",
      adet: 1,
    }, {
      id: 3,
      title: "MSI Monitör",
      image: "https://picsum.photos/id/2/5000/3333",
      info: "3.0 ghz",
      adet: 1,
    }
    , {
      id: 4,
      title: "Ekran Kartı",
      image: "https://picsum.photos/id/3/5000/3333",
      info: "3.0 ghz",
      adet: 1,
    }]);

  const [basket, setBasket] = useState([]);


  return (
    <div className="App">
      <h1>React Sepet Uygulaması</h1>
      <h2>Listelenen Ürünler</h2>
      <div className="urunler">
        {
          product.map((eleman, index) => {
            return (
              <Card
                onClick={() => {
                  const arr = [...basket];
                  if (arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1) {
                    arr.push(eleman);
                    setBasket(arr);
                  }
                  else {
                    arr.map((item)=>{
                      if(item.id===eleman.id)
                      {
                        return (eleman.adet+=1)
                      }
                      setBasket(arr);
                    });
                  }

                  console.log(basket);
                }}
                key={index}
                title={eleman.title}
                image={eleman.image}
                info={eleman.info}
                
              />)
          })
        }

      </div>

      <div className="sepet">
        <h2>SEPETİMİZ</h2>
        <ul className='sepet'>
          {
            basket.map((eleman,index)=>{
              return <li>
                {eleman.title + "------>"+ eleman.info  }
                <b style={{fontSize:"24px", color:"yellow"}}>{"Adet :"+eleman.adet}</b>
              </li>;
            })
          }
        </ul>
        {
          basket.length>0 ? <button onClick={()=>{
            setBasket([])
          }}>Sepeti Temizle</button> : <h2>Sepetinizde ürün bulunmamaktadır...</h2>
        }
      </div>

    </div>
  );
}

export default App;
