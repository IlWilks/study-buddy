class Api::CommentsController < ApplicationController
  before_action :set_channel
  before_action :set_comment, only: [:show, :update, :destroy]

  def index
    render json: @channel.comments.all
  end

  def show
    render json: @comment
  end

  def new
    render json: Comment.new
  end

  def create
    comment = @channel.comments.new(comment_params)
    if (comment.save)
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if (@comment.update(comment_params))
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment.destroy
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :points, :photo )
  end

  def set_channel
    @channel = Channel.find(params[:group_id])
  end

  def set_comment
    @comment = @channel.comments.find(params[:id])
  end
end
