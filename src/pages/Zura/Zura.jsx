import React from 'react'
import Template from '../../components/Project-Template/Template'
import Index from "./assets/index.png"


function Zura() {
    return (
        <div>
            <Template
                name="Zura Ventures"
                images={[Index]}
                techUsed={["MERN", "Jquery", "Shopify", "Polaris"]}
                visit="https://apps.shopify.com/giftkart"
                src=""
            />
        </div>
    )
}

export default Zura
