import React, { Component, createRef } from 'react'
import Newsitem from './Components/Newsitem'
import "./App.css"
import Spinner from './Components/Spinner'
// import InfiniteScroll from "react-infinite-scroll-component";

export default class App extends Component {



  static defaultProps = {
    country: 'us',
    category: 'general'
  }

  constructor() {
    super();
    
    this.state = {
      articles: [{}],
      page: 1,
      totalResults: 0,
      q: "everything",
      loading: false,
    }
    this.showError = createRef();

  }

  scrollBacktoTop = () => {

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  showNext = async () => {
    console.log("hello")


    if (this.state.totalResults - 20 * (this.state.page + 1) >= 0) {

    let url = `https://newsapi.org/v2/everything?q=${this.state.q}&apiKey=76e9b8d74c434a09a4d212a7e009c34a&page=${this.state.page + 1}&pagesize=20`
      
      this.setState({ page: this.state.page + 1 });

      this.setState({ loading: true });
      let data = await fetch(url);
      let Pdata = await data.json();
      console.log(Pdata.articles);

      this.setState({ articles: Pdata.articles });
      this.setState({ loading: false  });
      this.scrollBacktoTop();
    }else {
      console.log(this.showError.current.style.display = 'block')

      setTimeout(() => {
        this.showError.current.style.display = 'none'
      }, 2000)

    }
  }

  showPrevious = async () => {
    console.log("hello")
    
    let url = `https://newsapi.org/v2/everything?q=${this.state.q}&apiKey=76e9b8d74c434a09a4d212a7e009c34a&page=${this.state.page - 1}&pagesize=20`

    this.setState({ page: this.state.page - 1 })

    let data = await fetch(url)
    let Pdata = await data.json()
    console.log(Pdata)

    this.setState({ articles: Pdata.articles })
    console.log(this.state.articles)
    console.log("updated-the state")
  }

  async componentDidMount() {
    this.showError.current.style.display = 'none'
    let url = `https://newsapi.org/v2/everything?q=general&sortBy=relevance&apiKey=76e9b8d74c434a09a4d212a7e009c34a&page=1&pageSize=20`
    

    let data = await fetch(url)
    let Pdata = await data.json()
    //console.log(Pdata)

    this.setState({ articles: Pdata.articles, totalResults: Pdata.totalResults })
    console.log(this.state.articles)
    // this.setState({articles:this.article})
    // console.log(this.props.q + "<-")
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.category !== 'general') {
      if (prevProps.category === this.props.category) {
        console.log("X")
      } else {
        console.log(this.props.category + " ")
        this.setSearchtopicByTopHeadlines();
      }
    } else if (this.props.q !== this.state.q && (this.props.q !== '')) {
      console.log(this.props.q)
      this.setState({ q: this.props.q })
      this.setSearchtopicByEverything(this.props.q)
      console.log("mesa runnin " + this.props.q + " inside-didupdate")
    }

    console.log("outer-part of didupdate ")
  }

  setSearchtopicByTopHeadlines = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=76e9b8d74c434a09a4d212a7e009c34a`

    this.setState({ loading: true })
    this.scrollBacktoTop()


    let data = await fetch(url)
    let Pdata = await data.json()
    console.log(Pdata)

    if (Pdata.totalResults === 0) {
      alert("Enter something valid")
    } else {
      this.setState({ articles: Pdata.articles, totalResults: Pdata.totalResults })
    }

    this.setState({ loading: false })
  }

  setSearchtopicByEverything = async (topic) => {

    this.setState({ q: topic })
    console.log(topic)
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=76e9b8d74c434a09a4d212a7e009c34a&page=${this.state.page}&pagesize=20`

    // let url=`https://newsdata.io/api/1/news?apikey=pub_1867673735cfc60215ae09f21b7d81b6165c4&q=tesla`

    this.setState({ loading: true })
    this.scrollBacktoTop()


    let data = await fetch(url)
    let Pdata = await data.json()
    console.log(Pdata)

    if (Pdata.totalResults === 0) {
      alert("Enter something valid")
    } else {
      this.setState({ articles: Pdata.articles, totalResults: Pdata.totalResults })
    }

    this.setState({ loading: false })
  }

  render() {

    //document.body.style.backgroundColor='#383838'->dark mode
    document.body.style.backgroundColor = 'white'
    return (


      <div>

        <div className='text-center'>
          {this.state.loading && <Spinner />}
        </div>

        <div className="alert alert-danger" role="alert" ref={this.showError}>
          No Further Pages
        </div>


        
        <div className='container my-3' >
          <h2 style={{ color: 'black' }}>TOP HEADLINES</h2>
        </div>


        {/* <InfiniteScroll
            dataLength={Object.keys(this.state.articles).length} //This is important field to render the next data
            next={this.showNext()}
            hasMore={this.state.totalResults>Object.keys(this.state.articles).length}
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
          >
        </InfiniteScroll> */}

        {this.state.articles.map(
          (Element) => {
            //console.log(Element.publishedAt)
            return <Newsitem key={Element.urlToImage} newsUrl={Element.url} title={Element.title} description={Element.description} imageUrl={Element.urlToImage} author={Element.author} published={Element.publishedAt} />
          }
        )}

        <div className='container d-flex justify-content-between'>

          {!this.state.loading && <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.showPrevious}>&larr; Previous</button>}

          {!this.state.loading && <button type="button" className="btn btn-success" onClick={this.showNext}  >Next &rarr;</button>}

        </div>


      </div>
    )
  }
}
