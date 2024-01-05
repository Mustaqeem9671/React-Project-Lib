import React, { useRef } from 'react'
import '../../styles/AddBooks.css'

function AddBooks() {
  const title = useRef();
  const url = useRef();
  const auth = useRef();
  const pgcount = useRef();
  const cat = useRef();
  const id = useRef();

  const action =  (e)=>{
    e.preventDefault();
    const book = {
      id : id.current.value,
      title: title.current.value,
      thumbnailUrl: url.current.value,
      authors: auth.current.value,
      pageCount: pgcount.current.value,
      categories: cat.current.value,
    };
     fetch(' http://localhost:600/books' , {
      method : 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(book)
    }).then(() => { // then for resolving
      alert('Data has been added');
      // Reset the input fields after successful submission
      id.current.value = '';
      title.current.value = '';
      url.current.value = '';
      auth.current.value = '';
      pgcount.current.value = '';
      cat.current.value = '';
    })
  }
  return (
    <div className='addbooks'>
      <div className="h1">
        <h1>Add Books Here!</h1>
      </div>
   
    <div className='forms'>
      <form action="POST" onSubmit={action}>
        <input type="text" placeholder='Enter ID' ref={id} />
        <input type="text" placeholder='Enter Title' ref={title} />
        <input type="url" placeholder='Enter THumbnail_URL' ref={url}/>
        <input type="text" placeholder='Enter Author' ref={auth}/>
        <input type="text" placeholder='Enter Pagecount' ref={pgcount}/>
        <input type="text" placeholder='Enter categories' ref={cat}/>
        <div id="button">
          <input type="submit" value="Submit"  />
          </div>
      </form>
    </div>
    </div>
  )
}

export default AddBooks