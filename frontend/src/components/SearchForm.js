import React, { useEffect } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'

function SearchForm() {
  return (
    <Form className="search-form text-center col-xs-12 col-md-8 offset-md-2 pt-5">
      <InputGroup className="mb-2 mr-sm-2">
        <InputGroup.Prepend>
          <InputGroup.Text><i className="fas fa-search"></i></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="search" placeholder="Search" />
      </InputGroup>
    </Form>
  )
}

export default SearchForm