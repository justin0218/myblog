import Layout from '../components/layout';
import * as api from '../apis/blog';

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogDtail:"",
      commentsList:[],
      commentTotal:0,
      saytext:"",
      loadings:{
        "comment":false
      }
  }

  async componentDidMount(){
    let res = await api.GetBlogDetail(35);
    let data = res.currentArticle;
    let fileContent = await api.ReadNetFile(data.htmlTxtUrl)
    this.setState({blogDtail:fileContent.txt})
  }

  render() {
    const {blogDtail} = this.state
    return (
      <Layout>
          <div style={{background:"#fff",padding: "0 15px",marginBottom: 20}}>
            <div dangerouslySetInnerHTML={{__html: blogDtail}} className="markdown-body editormd-preview-container" previewcontainer="true" style={{width:"auto"}}></div>
          </div>
          <style jsx>{`
          .nextinfo a{
            text-decoration: none;
            color: #555;
          }
          .nextinfo a:hover{
            text-decoration: underline;
            color:#222;
          }
          .yzm {
              margin: 10px 10px 10px 0;
          }
          #plpost input[type="submit"] {
            display: block;
            background: #303030;
            color: #fff;
            border: 0;
            line-height: 30px;
            padding: 0 20px;
            border-radius: 5px;
            float: right;
            margin-bottom: 20px;
            margin-top: 13px;
            margin-right: 1%;
          }
          #saytext {
              width: 618px;
              outline: none;
              resize: none;
          }
          .saying span {
                float: right;
          }
           .saying{
            line-height: 30px;
            color: #a9a6a6;
            margin-bottom: 8px;
           } 
           .news_pl h2{
            border-bottom: #000 2px solid;
            line-height: 40px;
            font-size: 14px;
            padding-left: 10px;
            color: #000;
           }
           .fbtime{
            float: right;
            color: #999;
            font-size: 12px;
            width: 66px;
            overflow: hidden;
            white-space: nowrap;
           }
           .fbtime span{
            float: right;
            color: #999;
            font-size: 12px;
            width: 67px;
            overflow: hidden;
            white-space: nowrap;
           }
           p.fbtime{
            color: #000;
           }
           p.fbinfo{
            margin: 10px 0;
            word-wrap: break-word;
           }
           .fb ul{
            margin: 10px 10px;
            padding: 10px 10px 10px 70px;
            border-bottom: #ececec 1px solid;
            background: url(/static/images/erweima.jpg) no-repeat top 14px left 10px;
            background-size: 47px 47px;
           }  
           .news_pl{
            margin: 10px 0 20px 0;
            width: 100%;
            overflow: hidden;
           }
           .nextinfo{
            line-height: 24px;
            width: 100%;
            overflow: hidden;
            margin: 20px 0;
           }
           .nextinfo > p{
            padding: 4px 10px;
            border-radius: 5px;
           }
           .diggit{
            width: 160px;
            margin: auto;
            background: #E2523A;
            color: #fff;
            box-shadow: 1px 2px 6px 0px rgba(0,0,0,.2);
            border-radius: 3px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            outline: none;
            display: block;
           }
           .news_about {
                color: #888888;
                border: 1px solid #F3F3F3;
                padding: 10px;
                margin: 20px auto 15px auto;
                line-height: 23px;
                background: none repeat 0 0 #F6F6F6;
            }
            .bloginfo {
              width: 100%;
              overflow: hidden;
            }
            .news_title {
                font-size: 24px;
                font-weight: normal;
                padding: 20px 0;
                color: #333;
                margin:0;
            }
            .bloginfo li {
                float: left;
                margin-right: 20px;
                list-style: none;
            }
          `}</style>
      </Layout>     
    )
  }
}


