import React from 'react'
export default function Footer(props) {
    return (
    <>
        <section className={`bg-${props.mode==='dark'?'dark':'light'} mt-4`}>
            <footer className="py-5">
                <div className={`py-5 row  border-bottom text-center py-5 text-${props.mode==='dark'?'light':'dark'}`}>
                    <p> © 2025 Company, Inc. All rights reserved. <b>Build by Gaurav koshyari</b></p>
                </div>
            </footer>
        </section>
    </>
    )
}
