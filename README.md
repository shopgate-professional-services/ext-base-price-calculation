# ext-base-price-calculation

#### Important: Only for tier prices

This extension will calculate the base price based on a property with a reference unit. 

It will show the tier prices in a table with the from to amount, the unitPrice and the corresponding base price.


## Configuration

```
{
  "referenceUnitProp": "content",
  "unitMapping": {
    "gramm": 1000,
    "g": 1000,
    "kilogramm": 1,
    "kg": 1
  }
}
```

#### referenceUnitProp:
This extension need a property that provides a unit reference. For example a property named `content` that provides a information such as `2.5 Kilogramm` or `1000 Gramm` or `2000 g`. 

Example Values:
```json
{
  "referenceUnitProp": "Content"
}
```

#### unitMapping:
To calculate the base price, the extension needs to now the multiplicator for the different units. This configuration provides a mapping for the unit and the multiplikator. This list is expandable.

Please provide the units all in lowercase.

Default Values:
```json
{
  "unitMapping": {
    "gramm": 1000,
    "g": 1000,
    "kilogramm": 1,
    "kg": 1
  }
}
```

## Dependencies

This extension needs the [ @shopgate-project/products-properties](https://github.com/shopgate-professional-services/ext-products-properties) extension to provide the `referenceUnitProp`.