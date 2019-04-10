
import React from 'react';

import Article from './Article';

class ArticleList extends React.PureComponent {
  render() {
    return (
      <div className='p-2 mt-2'>
        {Object.values(this.props.articles).map(article =>
          <Article
            key={article.id}
            article={article}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;
