'use client'
import React, { useEffect, useState } from 'react';

type Params = {
  params: {
    id: string
  }
}

interface NewsEvent {
  _id: string;
  b_id: number;
  topic: string;
  e_topic: string;
  detail: string;
  e_detail: string;
  date: Date;
  location: string;
  e_location: string;
  category: string;
  nflag: boolean;
  picture: string[];
  eflag: boolean;
  status: string;
  undertaker: string;
  formattedDate: string; // Add formattedDate property
}
const ProductDetail = ({ params: { id } }: Params) => {
  const [data, setData] = useState<NewsEvent[]>([]);

  useEffect(() => {
    // Define the id you want to retrieve
    const idToFetch = id;

    // Fetch data from the backend API when the component mounts
    fetch('https://cs-project-ime1.vercel.app/api/news_events')
      .then((response) => response.json())
      .then((data) => {
        // Find the item with the matching _id
        const foundItem = data.find((item: NewsEvent) => item._id === idToFetch);

        if (foundItem) {
          // If the item is found, you can format its date and set it to your state
          const date: Date = new Date(foundItem.date);
          const formattedDate: string = formatDate(date);
          const formattedItem = { ...foundItem, formattedDate, date };

          setData([formattedItem]); // Place the item in an array as setData expects an array
        } else {
          // Handle the case where no item with the specified _id is found
          console.error(`Item with _id ${idToFetch} not found.`);
        }
      })
      .catch((error) => console.error(error));
  }, []);


  function formatDate(date: Date): string {
    const day: string = String(date.getDate()).padStart(2, '0');
    const month: string = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year: number = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const itemIndex = 0;
  const item: NewsEvent = data[itemIndex];


  console.log(data)

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.topic}</h1>

          <div>{item.detail}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {/* <Link href="/products">List Products</Link> */}
    </div>
  )
}

export default ProductDetail