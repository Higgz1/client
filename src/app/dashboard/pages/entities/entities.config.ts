import { EntityConfig } from "../../../lib/dynamic-forms/core/entity.config";


export const ENTITIES = {
    ingredients: EntityConfig.fromJson({
        title: "Ingredient",
        fields: [
            {
                key: 'icon_url',
                type: 'image-preview',
                templateOptions: {
                    label: 'Image'
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                expressionProperties: {
                    'templateOptions.required': '!model.id',
                },
                list: {
                    parser: 'image',
                    cssStyle: { 'text-align': 'center' },
                    filterable: false,
                }
            },
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    label: 'Name',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    filter_type: 'text'
                }
            },
            {
                key: 'brand',
                type: 'input',
                templateOptions: {
                    label: 'Brand',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    filter_type: 'text'
                },
            },
            {
                key: 'qty',
                type: 'input',
                templateOptions: {
                    label: 'Q.ty',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    filter_type: 'text'
                },
            },
            {
                key: 'price',
                type: 'input',
                templateOptions: {
                    label: 'Price',
                    type: 'number',
                    step: 0.01,
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    parser: 'currency',
                    filter_type: 'range'
                }
            },
            {
                key: 'active',
                type: 'checkbox',
                templateOptions: {
                    label: 'Active',
                },
                list: {
                    parser: 'checkbox',
                    filter_type: 'checkbox'
                }
            },
        ],
        crudOptions: {
            find: {
                includes: ['ingredients.ingredient']
            }
        },
        listOptions: {
            extraButtons: [{ key: 'importFromCSV', icon: 'cloud-upload' }],
        },
        service: 'IngredientsService',
        object: "Ingredient"
    }),
    categories: EntityConfig.fromJson({
        title: "Category",
        fields: [
            {
                key: 'image_url',
                type: 'image-preview',
                templateOptions: {
                    label: 'Image'
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                expressionProperties: {
                    'templateOptions.required': '!model.id',
                },
                list: {
                    parser: 'image',
                    cssStyle: { 'text-align': 'center' },
                    filterable: false,
                }
            },
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    label: 'Name',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    filter_type: 'text'
                },
            },
            {
                key: 'identifier',
                type: 'input',
                templateOptions: {
                    label: 'Identifier',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    filter_type: 'text'
                },
            },
            {
                key: 'showInShop',
                type: 'checkbox',
                templateOptions: {
                    label: 'Show category in shop',
                },
                list: {
                    filter_type: 'checkbox'
                },
            },
            {
                key: 'showBeforeCheckout',
                type: 'checkbox',
                templateOptions: {
                    label: 'Show before checkout',
                },
                list: {
                    filter_type: 'checkbox'
                },
            },
            {
                key: 'ingredients',
                type: 'many',
                templateOptions: {
                    label: 'Products',
                    service: 'IngredientsService'
                },
                list: {
                    parser: 'count',
                    filterable: false
                }

            },
            {
                key: 'subcategories',
                type: 'many',
                templateOptions: {
                    label: 'Subcategories',
                    service: 'CategoriesService'
                },
                list: {
                    parser: 'count',
                    filterable: false
                },

            },
        ],
        crudOptions: {
            find: {
                includes: []
            },
            findOne: {
                includes: ['ingredients', 'subcategories']
            }
        },
        relations: [
            { type: 'many', field: 'ingredients', pk_field: 'id' },
            { type: 'many', field: 'subcategories', pk_field: 'id' },
        ],
        service: 'CategoriesService',
        object: "Category"
    }),
    rims: EntityConfig.fromJson({
        title: "Recipes Ingredients Matching",
        fields: [
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    label: 'Name',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
            {
                key: 'matchingName',
                type: 'input',
                templateOptions: {
                    label: 'Matching name',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
            {
                key: 'isCondiment',
                type: 'checkbox',
                templateOptions: {
                    label: 'Is condiment',
                },
                list: {
                    parser: 'checkbox'
                }
            },
            {
                key: 'ingredients',
                type: 'ingredients-priority',
                templateOptions: {
                    label: 'Products'
                },
                list: {
                    parser: 'count',
                    filterable: false
                },

            }

        ],
        crudOptions: {
            findOne: {
                includes: ['ingredients.ingredient']
            }
        },
        relations: [
            { type: 'many', field: 'ingredients', fk_field: 'ingredient', pk_field: 'ingredient.id' }
        ],
        service: 'RimsService',
        object: "ReceiptIngredientsMatching"
    }),
    receipts: EntityConfig.fromJson({
        title: "Recipes",
        fields: [
            {
                key: 'image_url',
                type: 'image-preview',
                templateOptions: {
                    label: 'Image'
                },
                expressionProperties: {
                    'templateOptions.required': '!model.id',
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    parser: 'image',
                    cssStyle: { 'text-align': 'center' },
                    filterable: false
                }
            },
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    label: 'Name',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
            {
                key: 'description',
                type: 'textarea',
                templateOptions: {
                    label: 'Description',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    parser: 'ellips:50'
                }

            },
            {
                key: 'preparing',
                type: 'preparing',
                templateOptions: {
                    label: 'Preparing',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    parser: 'ellips:100',
                    hidden: true
                }

            },
            {
                key: 'kcal',
                type: 'input',
                templateOptions: {
                    label: 'kcal',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                }
            },
            {
                key: 'tags',
                type: 'select',
                templateOptions: {
                    label: 'Tags',
                    multiple: true,
                    required: true,
                    options: [
                        { label: 'Healthy', value: 'healthy' },
                        { label: 'Quick n Easy', value: 'quick-n-easy' },
                        { label: 'Primi', value: 'first' },
                        { label: 'Secondi', value: 'second' },
                        { label: 'Vegatariano', value: 'vegetarian' },
                        { label: 'Gluten free', value: 'gluten-free' },
                        { label: 'No oven', value: 'no-oven' },
                        { label: 'No mixer', value: 'no-mixer' },
                    ]
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {

                }
            },
            {
                key: 'time',
                type: 'input',
                templateOptions: {
                    label: 'Time',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
            {
                key: 'active',
                type: 'checkbox',
                defaultValue: true,
                templateOptions: {
                    label: 'Is active?',
                }
            },
            {
                key: 'priority',
                type: 'input',
                defaultValue: 1000,
                templateOptions: {
                    label: 'Priority',
                    type: "number",
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
            {
                key: 'ingredients',
                type: 'ingredients-qta',
                templateOptions: {
                    label: 'Ingredienti',
                },
                list: {
                    parser: 'count',
                    filterable: false
                },

            },
            {
                key: 'fk_user',
                type: 'one',
                templateOptions: {
                    label: 'Creator',
                    service: 'UsersService',
                    selected_key: 'item.name + " " + item.surname',
                    dataProvider: {
                        label: 'email',
                        value: 'email'
                    }
                },
                list: {
                    filterable: false
                },

            },
        ],
        crudOptions: {
            findOne: {
                includes: ['ingredients.ingredient']
            }
        },
        relations: [
            { type: 'many', field: 'ingredients', fk_field: 'ingredient', pk_field: 'ingredient.id' },
            { type: 'one', field: 'fk_user', pk_field: 'id' },
        ],
        service: 'ReceiptsService',
        object: "Receipt"
    }),
    orders: EntityConfig.fromJson({
        title: "Order",
        fields: [
            {
                key: 'created',
                type: 'label',
                templateOptions: {
                    label: 'Created',
                    type: "date:'dd/MM/yyyy HH:mm'",
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    parser: "date:'dd/MM/yyyy HH:mm'"
                }
            },
            {
                key: 'status',
                type: 'select',
                templateOptions: {
                    label: 'Status',
                    required: true,
                    options: [
                        { label: "Payment pending", value: "payment_pending" },
                        { label: "Paid", value: "paid" },
                    ]
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
            {
                key: 'phone',
                type: 'input',
                templateOptions: {
                    label: 'Phone',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
            {
                key: 'delivery_method',
                type: 'select',
                templateOptions: {
                    label: 'Delivery method',
                    required: true,
                    options: [
                        { label: "Standard", value: "standard" },
                        { label: "Footstep", value: "footstep" },
                    ],
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                }
            },
            {
                key: 'delivery_time',
                type: 'label',
                templateOptions: {
                    label: 'Delivery time',
                    required: true,
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                }
            },
            {
                key: 'shipping_cost',
                type: 'label',
                templateOptions: {
                    label: 'Shipping cost',
                    type: "currency:2",
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    parser: "currency:2:€"
                }
            },
            {
                key: 'fk_user',
                type: 'one',
                templateOptions: {
                    label: 'User',
                    required: true,
                    service: 'UsersService',
                    selected_key: 'item.name + " " + item.surname + " (" + item.email + ")"'
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
            },
        ],
        crudOptions: {
            find: {
                includes: [],
                orderBy: '-created'
            }
        },
        relations: [
            { type: 'one', field: 'user', pk_field: 'ingredient.id' }
        ],
        service: 'OrdersService',
        object: "Order"
    }),
    images: EntityConfig.fromJson({
        title: "Image",
        fields: [
            {
                key: 'url',
                type: 'image-preview',
                templateOptions: {
                    label: 'Image'
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                expressionProperties: {
                    'templateOptions.required': '!model.id',
                },
                list: {
                    parser: 'image',
                    cssStyle: { 'text-align': 'center' },
                    filterable: false,
                }
            },
            {
                key: 'name',
                type: 'input',
                templateOptions: {
                    label: 'Name'
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                }
            },
            {
                key: 'url',
                type: 'label',
                templateOptions: {
                    label: 'Url'
                },
                validation: {},
                list: {
                }
            }
        ],
        crudOptions: {
            find: {
                includes: []
            }
        },
        listOptions: {
            rows: {
                extraButtons: []
            },
        },
        service: 'ImagesService',
        object: "BAImage"
    }),
    users: EntityConfig.fromJson({
        title: "User",
        fields: [
            {
                key: 'email',
                type: 'label',
                templateOptions: {
                    label: 'Email'
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    filter_type: 'text',
                    filterable: true
                }
            },
            {
                key: 'name',
                type: 'label',
                templateOptions: {
                    label: 'Name'
                },
                validation: {
                    messages: {
                        required: "Field is required!",
                    },
                },
                list: {
                    filter_type: 'text',
                    filterable: true
                }
            },
            {
                key: 'surname',
                type: 'label',
                templateOptions: {
                    label: 'Surname'
                },
                validation: {},
                list: {
                    filter_type: 'text',
                    filterable: true
                }
            },
            {
                key: 'roles',
                type: 'select',
                templateOptions: {
                    label: 'Roles',
                    multiple: true,
                    required: true,
                    options: [
                        { label: 'Admin', value: 'admin' },
                        { label: 'Creator', value: 'creator' },
                    ]
                },
                validation: {},
                list: {
                }
            }
        ],
        crudOptions: {
            find: {
                includes: []
            }
        },
        listOptions: {
            rows: {
                extraButtons: []
            },
        },
        service: 'UsersService',
        object: "User"
    }),
}
