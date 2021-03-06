class Event < ActiveRecord::Base
  validates :date, presence: true
  validates :title, presence: true, uniqueness: true
  validates :organizer_name, presence: true

  validate :date_cannot_be_in_the_past

  def date_cannot_be_in_the_past
    if date.present? && date < Date.today
      errors.add(:date, "can't be in the past")
    end
  end
end
