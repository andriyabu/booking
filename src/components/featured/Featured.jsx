import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/685726.webp?k=25b602b90c38b13fe9e858b62a9bbd3c773bf459b16e84b26642a8a056c9f524&o=" alt="" srcset="" />
            <div className="featuredTitles">
                <h1>Manila</h1>
                <h2>4,796 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/685532.webp?k=27f5778aebf08d8894506a031c18df7180c530a0937ad377c2b3ecaa540fe9f7&o=" alt="" srcset="" />
            <div className="featuredTitles">
                <h1>Kuala Lumpur</h1>
                <h2>4,231 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/619666.webp?k=504b97635641d489438feb63780d4ae80ce8a2fd08a1fcb6183485738a87e6ad&o=" alt="" srcset="" />
            <div className="featuredTitles">
                <h1>Singapore</h1>
                <h2>807 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/688179.webp?k=dfdd1dae30d5ad3d58b81ba7b87079bb0aefec27dbaeb9dc6dd32c836208db93&o=" alt="" srcset="" />
            <div className="featuredTitles">
                <h1>Ubud</h1>
                <h2>2,394 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img className="featuredImg" src="https://t-cf.bstatic.com/xdata/images/city/540x270/688052.webp?k=2f1b6381dacc6b06942e5fdb94ba971c1e8d9cf4b92d19c96b395cb189d98ebd&o=" alt="" srcset="" />
            <div className="featuredTitles">
                <h1>Jakarta</h1>
                <h2>3,915 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured