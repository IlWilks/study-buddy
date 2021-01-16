class Api::GroupsController < ApplicationController
  before_action :set_exercises, only: [:update, :destroy, :show]

  def index
    render json: Group.all
  end

  def show
    render json: @group
  end

  def create
    group = Group.new(group_params)
    if group.save
      render json: group
    else
      render json: {errors: group.errors}, status: 422
    end
  end

  def destroy
    @group.destroy
    render json: @group
  end

  def update
    @group.update(group_params)
    render json: @group
  end

  private
  def group_params
    params.require(:group).permit(:title, :description)
  end
  def set_group
    @group = Group.find(params[:id])
  end
end
