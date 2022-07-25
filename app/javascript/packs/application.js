// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import "jquery"
global.$ = require("jquery")
import "bootstrap"
import "jquery-lazy"
import "datatables.net-bs5"
import Swal from "sweetalert2"
global.Swal = Swal
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "packs/progress"
import "packs/related_post"
import "packs/posts"
import "packs/custom"
import "packs/songs"
import "packs/scroll"
import "packs/toast"
import "packs/skills"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
