import React from 'react'
import {Link} from 'gatsby'
import Title from "../Global/Title"

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="Our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reprehenderit voluptatem, quam, quo consequatur alias animi illum recusandae iure impedit consequuntur eveniet cum laborum id neque at blanditiis saepe odit nisi nobis enim ea beatae? Distinctio eaque eligendi molestiae?
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                            about page
                            
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
