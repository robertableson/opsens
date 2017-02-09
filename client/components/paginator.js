import React, {Component} from 'react';

class Paginator extends Component{
  constructor(props){
    super(props);
    this.state={
      currentPage: 1
    };
  }

  propTypes: {
        max: React.PropTypes.number.isRequired,
        maxVisible: React.PropTypes.number,
        onChange: React.PropTypes.func.isRequired
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevState.currentPage !== this.state.currentPage) {
            this.props.onChange(this.state.currentPage);
        }
    }
    goTo(page, e) {
      e.preventDefault();
        this.setState({currentPage: page});
    }
    onClickFirst(e) {
      e.preventDefault();
      if(this.state.currentPage > 1) {
          this.goTo(1, e);
      }
    }
    onClickLast(e) {
        if (this.state.currentPage < this.props.max) {
            this.goTo(this.props.max, e);
        }
    }
  render(){
    console.log("props.max: " + this.props.max);

    var className = this.props.className || '',
        p = this.props,
        s = this.state,
        skip = 0;

    if (s.currentPage > p.maxVisible - 1 && s.currentPage < p.max) {
        skip = s.currentPage - p.maxVisible + 1;
    } else if (s.currentPage === p.max) {
        skip = s.currentPage - p.maxVisible;
    }

    var iterator = Array.apply(null, Array(p.maxVisible)).map(function(v, i) {
        return skip + i + 1;
    });

    return (
        <nav>
            <ul className="pagination">
                <li className={s.currentPage === 1 ? 'disabled' : ''}>
                    <a href="#" onClick={this.onClickFirst.bind(this)}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Prev</span>
                    </a>
                </li>
                {iterator.map(function(page) {
                    return (
                        <li key={page}
                            onClick={this.goTo.bind(this, page)}
                            className={s.currentPage === page ? 'active' : ''}>
                            <a href="#">{page}</a>
                        </li>
                    );
                }, this)}
                <li className={s.currentPage === p.max ? 'disabled' : ''}>
                    <a href="#" onClick={this.onClickLast.bind(this)}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Paginator;
