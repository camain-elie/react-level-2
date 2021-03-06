import PropTypes from 'prop-types';

import './githubElement.css';

/** 
 * GithubElement component build a card type component 
 * displaying a github user's information. 
*/
export default function GithubElement ({ dataItem }) {

    const {login, avatar_url, html_url, score} = dataItem;

    return(
        <div className="github-element">
            <img
                src={avatar_url}
                alt="user avatar"
            />

            <div className="github-element__info">
                <p>
                    <a 
                        className="github-element__login"
                        href={html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {login}
                    </a>
                </p>
                <p>
                    <a
                        className="github-element__repositeries"
                        href={`${html_url}?tab=repositories`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        See user&apos;s repositeries
                    </a>
                </p>
                <p>
                    {`${score}${score % 1 === 0 ? ".0" : ""}`}
                    <span className="github-element__score-icon material-icons-round">
                        star
                    </span>

                </p>
            </div>
        </div>
    );
}

GithubElement.propTypes = {
    dataItem: PropTypes.object.isRequired,
};