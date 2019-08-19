import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [],
            apiKey: "AIzaSyC3GeR_YOFijAKttKy7bnP1_86AJzqneCY",
            channelId: "UCWJ2lWNubArHWmf3FIHbfcQ",
            maxResult: "5"
        };
    }

    componentWillMount() {
        fetch(
            "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" +
                this.state.channelId +
                "&maxResults=" +
                this.state.maxResult +
                "&key=" +
                this.state.apiKey
        )
            .then(response => response.json())
            .then(response => {
                this.setState({ lists: response.items });
                console.log(response.items);
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.state.lists.map((list, index) => {
                        return (
                            // <p key={list.etag}>{list.id.videoId}</p>
                            <React.Fragment>
                                <div
                                    key={list.etag}
                                    className="card border-0"
                                    style={{ maxWidth: "18rem" }}
                                >
                                    <iframe
                                        key={list.etag}
                                        className="mx-1"
                                        width="280"
                                        height="150"
                                        src={
                                            "https://www.youtube.com/embed/" +
                                            list.id.videoId
                                        }
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                    <div
                                        className="card-body pl-1"
                                        width="150"
                                        height="150"
                                    >
                                        <a
                                            className="text-dark nounderline font-weight-bold"
                                            style={{ fontSize: "0.8rem" }}
                                            target="_blank"
                                            href={
                                                "https://www.youtube.com/watch?v=" +
                                                list.id.videoId
                                            }
                                        >
                                            {list.snippet.title}
                                        </a>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Main;
