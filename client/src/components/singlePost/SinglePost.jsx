import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img
                    src='https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?auto=compress&cs=tinysrgb&w=600'
                    alt=''
                    className='singlePostImg'
                />

                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>

                <div className='singlePostInfo'>
                    <span className='SinglePostAuthor'>Author: <b>Prateek</b></span>
                    <span className='SinglePostDate'>1 hour ago</span>
                </div>

                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quia sint ipsa doloremque nisi facere assumenda eaque dolores ea aliquid aliquam cupiditate officia, consectetur voluptates tenetur perferendis veniam quod consequatur?
                </p>
            </div>
        </div>
    )
}
