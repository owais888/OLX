import React, { Component } from 'react';
import Form from './Form'
import Nation from './Nation'
class Card extends Component {
  render() {
    return (
      <div className='container'>
        <section className="text-gray-500 bg-gray- body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-half w-full" src="https://tpc.googlesyndication.com/simgad/1776290970704365619" />
            </div>
          </div>

          <div className="container px-5 py-24 mx-auto" >

            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px #ffcc00' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/u7lranmjo8cb-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>CIAZ</h3>
                  <Form />


                  <p className="mt-1" style={{ color: '#e65c00', fontSize: '20px' }}>$16.00</p>

                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/b0iac5tzwt5t1-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>LAWN</h3>

                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$21.15</p>

                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/lkrgd03zbod72-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>JENS</h3>
                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/l1h5cqtuzf4d-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>CIVIC</h3>
                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$18.40</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/wd61ct8f5j2v1-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>DIGITAL DEVICE</h3>
                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://pyariwalls.com/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-04-at-10.52.38-PM-1-1.jpeg" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>CLOCK</h3>
                  <Form />

                  <p className="mt-1" style={{ color: '#e65c00', fontSize: '20px' }}>$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/3whqdkip2fbc3-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>LED</h3>
                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://statics.olx.com.pk/olxpk/vyom/carousel/v1/ready_to_move.png" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>BED</h3>
                  <Form />

                  <p className="mt-1" style={{ color: '#e65c00', fontSize: '20px' }}>$18.40</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/rl3jwi1ldxvi-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>BRACLET</h3>
                  <Form />
                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$16.00</p>

                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/gje0bz3s90f61-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">

                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>BABY HANG BAG</h3>

                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/64jyppp1g5ic3-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">

                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>GOG</h3>

                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/xuujzuxk6b0t2-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">

                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>MOBILE</h3>

                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$18.40</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/u70xg79ta4hl-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">

                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>HEAVY BIKE</h3>

                  <Form />

                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/38zui40i77ue1-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">

                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>PERFUME</h3>

                  <Form />

                  <p className="mt-1" style={{ color: '#e65c00', fontSize: '20px' }}>$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/tnhakju7fioq-PK/image;s=300x600;q=60" />
                </a>
                <div className="mt-4">

                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>HAIR STRNGTHNER</h3>

                  <Form />


                  <p className="mt-1" style={{ color: ' #e65c00', fontSize: '20px' }}>$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden" style={{ boxShadow: '6px  -1px yellow' }}>
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://apollo-singapore.akamaized.net/v1/files/g44di6jjmk4j1-PK/image;s=300x600;q=60" />
                </a>

                <div className="mt-4">

                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1" style={{ color: 'black', fontSize: '20px', fontFamily: 'serif' }}>I-12 EAR BIRDs</h3>

                  <Form />

                  <p className="mt-1" style={{ color: '#e65c00', fontSize: '20px' }}>$18.40</p>
                </div>
              </div>
            </div>

          </div>

        </section>
        <Nation />
      </div>
    );
  }
}


export default Card

