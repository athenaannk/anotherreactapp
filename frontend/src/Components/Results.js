// {% extends "layout.html" %}

// {% block title %}
//     Result
// {% endblock %}

// {% block main %}

//     <!-- Headline -->
//     {% if recipes_list %}
//         <div class="my-3 text-left">
//             <h5>
//                 Recipes 
//                 {% if readable_ingredients %}
//                     containing {{ readable_ingredients }}
//                 {% endif %}
//                 that match your requirements:
//             </h5>
//         </div>
//     {% endif %}

//     <!-- Result -->
//     <div class="form px-2 py-5">
//         <!-- Handle error -->
//         {% if not recipes_list %}
//         <div class="text-center">
//             <div class="fs-1 fw-7 text-center mb-3">No result! <span class="noto">🙁</span></div>
//             <div class="fs-5">We couldn't find recipes that match all of your requirements.</div>
//             <div class="fs-5 mb-5">Please make sure there's no typo in your query.</div>
//             <a href="/" class="fw-6 fs-4">Try Again?</a>
//         </div>
//         {% else %}
//         <!-- Show result -->
//         <div class="d-flex flex-wrap justify-content-evenly">
//             {% for recipe in recipes_list %}
//                 <!-- Cards -->
//                 <div type="button" class="position-relative border-0 card mb-5" style="width: 13rem;" data-bs-toggle="modal" data-bs-target="#recipe{{ loop.index }}">
//                     <!-- Card Image -->
//                     <img class="card-img-top" src="{{ recipe['image'] }}" alt="{{ recipe['label'] }}">
//                     <!-- Card Body -->
//                     <div class="card-body" style="text-align: left!important;">
//                         <!-- Title -->
//                         <div class="h5 lh-sm card-text text-capitalize mb-2">{{ recipe['label'] }}</div>
//                         <!-- Input Label -->
//                         <small class="lh-1 text-uppercase d-flex flex-wrap">
//                             <!-- Dish Tags (match one) -->
//                             {% for dish in recipe['dishType'] %}
//                                 {% if dish in dish_list%}
//                                     <small class="fw-4 p-2 mb-1 me-1 form">{{ dish }}</small>
//                                 {% endif%}
//                             {% endfor %}
//                             <!-- Diet Tags (match all) -->
//                             {% if diet_list %}
//                                 {% for diet in diet_list %}
//                                     <small class="fw-4 p-2 mb-1 me-1 form">{{ diet }}</small>
//                                 {% endfor %}
//                             {% endif %}
//                             <!-- Health Tags (match all) -->
//                             {% if health_list %}
//                                 {% for health in health_list %}
//                                     <small class="fw-4 p-2 mb-1 me-1 form">{{ health }}</small>
//                                 {% endfor %}
//                             {% endif %}
//                             <!-- Cuisine Tags (match one) -->
//                             {% for cuisine in recipe['cuisineType'] %}
//                                 {% if cuisine in cuisine_list %}
//                                     <small class="fw-4 p-2 mb-1 me-1 form">{{ cuisine }}</small>
//                                 {% endif %}
//                             {% endfor %}
//                         </small>
//                     </div>
//                 </div>
//                 <!-- Modal -->
//                 <div class="modal" id="recipe{{ loop.index }}">
//                     <div class="modal-dialog modal-dialog-centered modal-lg">
//                         <div class="modal-content">
//                             <!-- Modal body -->
//                             <div class="modal-body p-5">
//                                 <!-- Visible -->
//                                 <div class="row mb-3">
//                                     <!-- Image, Total Time, & Calories -->
//                                     <div class="col-auto px-4">
//                                         <!-- Image -->
//                                         <div class="mb-3">
//                                             <img src="{{ recipe['image'] }}" alt="{{ recipe['label'] }}">
//                                         </div>
//                                         <!-- Total Time and Calories -->
//                                         <div class="small mb-4 lh-lg d-flex flex-wrap justify-content-between">
//                                             <!-- Time -->
//                                             <small>
//                                                 <span class="bi bi-stopwatch"></span>
//                                                 <!-- Handle error if no data for totalTime -->
//                                                 {% if recipe['totalTime']|float > 0.0 %}
//                                                     <span>{{ (recipe['totalTime'])|int }} min.</span>
//                                                 {% else %}
//                                                     No data.
//                                                 {% endif %}
//                                             </small>
//                                             <!-- Calories -->
//                                             <small>
//                                                 <span class="bi bi-fire"></span>
//                                                 <span>{{ (recipe['calories'])|int }} cal.</span>
//                                             </small>
//                                         </div>
//                                         <!-- View recipe -->
//                                         <div class="mb-3 text-center">
//                                             <a href="{{ recipe['url'] }}" target=”_blank”><button type="button" class=" yellow px-5 btn btn-primary">View Full Recipe <span class="bi bi-box-arrow-up-right"></span></button></a>
//                                         </div>
//                                     </div>
//                                     <!-- Title, Source, & Ingredients -->
//                                     <div class="col px-4">
//                                         <!-- Title -->
//                                         <div class="h3 pb-2 lh-sm text-capitalize">{{ recipe['label'] }}</div>
//                                         <!-- Source -->
//                                         <div class="small mb-3">
//                                             By
//                                             <a href="{{ recipe['url'] }}" target=”_blank”>
//                                                 <span>{{ recipe['source'] }}</span>
//                                             </a>
//                                         </div>
//                                         <!-- Ingredients -->
//                                         <div class="mb-3">
//                                             <div class="lh-sm text-muted mb-2">Ingredients:</div>
//                                             <small class="lh-1 text-lowercase">
//                                                 <ul class="list-group border-top border-bottom list-group-flush mb-3">
//                                                     {% for line in recipe['ingredientLines'] %}
//                                                         <li class="list-group-item p-1">{{ line }}</li>
//                                                     {% endfor %}
//                                                 </ul>
//                                             </small>
//                                         </div>
                                        
//                                     </div>
//                                 </div>
//                                 <!-- Expanded Tags -->
//                                 <div class="row mb-3 px-4">
//                                     <div class="col-12 px-0">
//                                         <div class="lh-base text-muted py-2">Show Tags
//                                             <a href="javascript:void(0)" id="tag" class="toggler small text-muted ms-2 bi bi-chevron-down"></a>
//                                         </div>
//                                         <div class="mb-4 py-2 border-top border-bottom hide">
//                                             <!-- Dish Tags -->
//                                             <div class="mb-1">
//                                                 <div class="lh-base small text-muted">Dish Type:</div>
//                                                 <small class="ps-2 lh-1 text-uppercase d-flex flex-wrap">
//                                                     {% for dish in recipe['dishType']|sort %}
//                                                         {% if dish in dishtype%}
//                                                             <small class="fw-4 p-2 mb-1 me-1 form">{{ dish }}</small>
//                                                         {% endif %}
//                                                     {% endfor %}
//                                                 </small>
//                                             </div>
//                                             <!-- Diet Tags -->
//                                             <div class="mb-1">
//                                                 <div class="lh-sm small text-muted">Diet Type:</div>
//                                                 <small class="ps-2 lh-1 text-uppercase d-flex flex-wrap">
//                                                     {% for diet in recipe['dietLabels']|sort %}
//                                                         <small class="fw-4 p-2 mb-1 me-1 form">{{ diet }}</small>
//                                                     {% endfor %}
//                                                 </small>
//                                             </div>
//                                             <!-- Health Tags -->
//                                             <div class="mb-1">
//                                                 <div class="lh-sm small text-muted">Allergy / Restriction:</div>
//                                                 <small class="ps-2 lh-1 text-uppercase d-flex flex-wrap">
//                                                     {% for health in recipe['healthLabels']|sort %}
//                                                         <small class="fw-4 p-2 mb-1 me-1 form">{{ health }}</small>
//                                                     {% endfor %}
//                                                 </small>
//                                             </div>
//                                             <!-- Cuisine Tags -->
//                                             <div class="mb-1">
//                                                 <div class="lh-sm small text-muted">Cuisine Type:</div>
//                                                 <small class="ps-2 lh-1 text-uppercase d-flex flex-wrap">
//                                                     {% for cuisine in recipe['cuisineType']|sort %}
//                                                         <small class="fw-4 p-2 mb-1 me-1 form">{{ cuisine }}</small>
//                                                     {% endfor %}
//                                                 </small>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <!-- Bookmark -->
//                                 <form action="/add" method="POST">
//                                     <div class="row center">
//                                         <div>
//                                             <input type="hidden" name="link" value="{{ recipe['link'] }}">
//                                             <input type="hidden" name="label" value="{{ recipe['label'] }}">
//                                             <input type="hidden" name="image" value="{{ recipe['image'] }}">
//                                             <input type="hidden" name="source" value="{{ recipe['source'] }}">
//                                             <input type="hidden" name="url" value="{{ recipe['url'] }}">
//                                             <input type="hidden" name="dietLabels" value="{{ recipe['dietLabels'] }}">
//                                             <input type="hidden" name="healthLabels" value="{{ recipe['healthLabels'] }}">
//                                             <input type="hidden" name="ingredientLines" value="{{ recipe['ingredientLines'] }}">
//                                             <input type="hidden" name="calories" value="{{ recipe['calories'] }}">
//                                             <input type="hidden" name="totalTime" value="{{ recipe['totalTime'] }}">
//                                             <input type="hidden" name="cuisineType" value="{{ recipe['cuisineType'] }}">
//                                             <input type="hidden" name="dishType" value="{{ recipe['dishType'] }}">
//                                         </div>
//                                         <div class="col text-center">
//                                             <input type="submit" name="bookmark" id="bookmark" value="Bookmark" class="px-5 btn btn-primary"
//                                             {% if recipe['link'] not in saved_recipes_list %}
//                                                 onClick="this.form.submit(); this.disabled=true;this.value='Bookmarked';" 
//                                             {% else %}
//                                                 disabled="disabled" 
//                                             {%endif %}/>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             {% endfor %}
//         </div>
//         {% endif %}
//     </div>

//     <!-- To top -->
//     <button type="button" class="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
//         <i class="bi bi-arrow-up"></i>
//     </button>
    
// {% endblock %}



// {% block script %}
// <script>
//     {% include 'js/toggle.js' %}
//     {% include 'js/toTop.js' %}
// </script>
// {% endblock%}