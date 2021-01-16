class Api::GroupsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_exercises, only: [:update, :destroy, :show]

  def index
    render json: @current_user.groups.all
  end

  def show
    render json: @group
  end

  def create
    group = @current_user.groups.new(group_params)
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
    @group = @current_user.groups.find(params[:id])
  end
end
