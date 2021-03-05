class HomeController < ApplicationController

    def index
        @study_items = []
        @study_items << StudyItem.new(title: "MVC")
        @study_items << StudyItem.new(title: "Saas")
        @study_items << StudyItem.new(title: "Rails")
        # render 'index'
    end

end