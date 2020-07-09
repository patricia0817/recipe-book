import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Page from './Page'

function ViewAllCategories() {
  return (
    <Page>
      <div className="col-12 category-cards-container">
        <div className="row">
          <div className="category-card col-12 col-sm-6 col-lg-4">
            <div className="single-feature-area mb-80">
              <div className="d-flex align-items-center mb-30">
                <img src="https://static.thenounproject.com/png/47837-200.png" alt="" />
                <h5 className="text-success ml-3">Appetizers</h5>
              </div>
              <p>An hors d'oeuvre, appetiser or starter is a small dish served before a meal in European cuisine. Some hors d'oeuvres are served cold, others hot. Hors d'oeuvres may be served at the dinner table as a part of the meal, or they may be served before seating, such as at a reception or cocktail party.
              </p>
              <Link to="/" className="read-more">Read more ...</Link>
            </div>
          </div>
          <div className="category-card col-12 col-sm-6 col-lg-4">
            <div className="single-feature-area mb-80">
              <div className="d-flex align-items-center mb-30">
                <img src="https://static.thenounproject.com/png/1702703-200.png" alt="" />
                <h5 className="text-success ml-3">Salads</h5>
              </div>
              <p>A salad is a dish consisting of a mixture of small pieces of food, usually vegetables or fruit. However, different varieties of salad may contain virtually any type of ready-to-eat food. </p>
              <Link to="/" className="read-more">Read more ...</Link>
            </div>
          </div>
          <div className="category-card col-12 col-sm-6 col-lg-4">
            <div className="single-feature-area mb-80">
              <div className="d-flex align-items-center mb-30">
                <img src="https://icon-library.com/images/soup-icon/soup-icon-1.jpg" alt="" />
                <h5 className="text-success ml-3">Soups</h5>
              </div>
              <p>Soup is a primarily liquid food, generally served warm or hot, that is made by combining ingredients of meat or vegetables with stock, or water. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth. </p>
              <Link to="/" className="read-more">Read more ...</Link>
            </div>
          </div>
          <div className="category-card col-12 col-sm-6 col-lg-4">
            <div className="single-feature-area mb-80">
              <div className="d-flex align-items-center mb-30">
                <img src="https://static.thenounproject.com/png/188703-200.png" alt="" />
                <h5 className="text-success ml-3">Main Dishes</h5>
              </div>
              <p>The main course is the featured or primary dish in a meal consisting of several courses. It usually follows the entrée course. </p>
              <Link to="/" className="read-more">Read more ...</Link>
            </div>
          </div>
          <div className="category-card col-12 col-sm-6 col-lg-4">
            <div className="single-feature-area mb-80">
              <div className="d-flex align-items-center mb-30">
                <img src="https://static.thenounproject.com/png/2456403-200.png" alt="" />
                <h5 className="text-success ml-3">Desserts</h5>
              </div>
              <p>Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections, and possibly a beverage such as dessert wine or liqueur; however, in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere.</p>
              <Link to="/" className="read-more">Read more ...</Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default ViewAllCategories