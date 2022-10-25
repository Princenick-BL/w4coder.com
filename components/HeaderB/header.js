import React from 'react'
import Link from 'next/link'

export default function ArticleHeader() {
    return (
        <header
            className="webpage-articleHeader ampstart-headerbar flex justify-start items-center top-0 left-0 right-0 pl2 pr2"
        >
            <Link href={"/"}>
                    <h1 className="webpage-logo">w4coder</h1>
            </Link>

        </header>

    )
}
