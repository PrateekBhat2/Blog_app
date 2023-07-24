import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
            className='postImg'
            src='https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
        />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit amet</span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?</p>
    </div>
  )
}
