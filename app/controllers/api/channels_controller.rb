class Api::ChannelsController < ApplicationController
  before_action :set_channel, only: [:show, :update, :destroy]

  def index
    render json: Channel.all
  end

  def show
    render json: @channel
  end

  def create
    channel = Channel.new(channel_params)
    if channel.save
      render json: channel
    else
      render json: { errors: channel.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @channel.update(channel_params)
      render json: @channel
    else
      render json: @channel.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @channel.destroy
    render json: { message: 'Channel deleted' }
  end

  private

  def set_channel
    @channel = Channel.find(params[:id])
  end

  def channel_params
    params.require(:channel).permit(:subject, :public, :description)
  end
end
