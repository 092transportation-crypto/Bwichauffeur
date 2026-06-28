import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    service: '',
    vehicle: '',
    date: '',
    time: '',
    passengers: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.pickupLocation) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Mock submission - in real app, this would go to backend
    console.log('Booking submitted:', formData);
    
    toast.success('Booking Request Received! Our team will contact you shortly to confirm your reservation.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickupLocation: '',
      dropoffLocation: '',
      service: '',
      vehicle: '',
      date: '',
      time: '',
      passengers: '',
      notes: ''
    });
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-[#D4AF37]/40 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl font-bold text-white mb-4">
              Reserve Your <span className="text-[#D4AF37]">Luxury Ride</span>
            </CardTitle>
            <p className="text-gray-400 text-lg">
              Fill out the form below and our team will contact you to confirm your booking
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center">
                    <User className="h-4 w-4 mr-2 text-[#D4AF37]" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-[#D4AF37]" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="877-679-0100"
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#D4AF37]" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                />
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white">Service Type</Label>
                  <Select onValueChange={(value) => handleSelectChange('service', value)} value={formData.service}>
                    <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37]">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airport">Airport Transportation</SelectItem>
                      <SelectItem value="corporate">Corporate Service</SelectItem>
                      <SelectItem value="wedding">Wedding & Events</SelectItem>
                      <SelectItem value="group">Group Transportation</SelectItem>
                      <SelectItem value="hourly">Hourly Service</SelectItem>
                      <SelectItem value="tour">City Tour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Vehicle Type</Label>
                  <Select onValueChange={(value) => handleSelectChange('vehicle', value)} value={formData.vehicle}>
                    <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37]">
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan-s">Mercedes S-Class</SelectItem>
                      <SelectItem value="sedan-e">Mercedes E-Class</SelectItem>
                      <SelectItem value="suv-escalade">Cadillac Escalade</SelectItem>
                      <SelectItem value="suv-navigator">Lincoln Navigator</SelectItem>
                      <SelectItem value="midsize-suv">Midsize SUV</SelectItem>
                      <SelectItem value="van">Mercedes Sprinter Van</SelectItem>
                      <SelectItem value="bmw">BMW 7 Series</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-2">
                <Label htmlFor="pickupLocation" className="text-white flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[#D4AF37]" />
                  Pickup Location *
                </Label>
                <Input
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="BWI Airport Terminal A"
                  required
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dropoffLocation" className="text-white flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[#D4AF37]" />
                  Drop-off Location
                </Label>
                <Input
                  id="dropoffLocation"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  placeholder="Downtown Baltimore"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[#D4AF37]" />
                    Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-white flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-[#D4AF37]" />
                    Time
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers" className="text-white flex items-center">
                    <User className="h-4 w-4 mr-2 text-[#D4AF37]" />
                    Passengers
                  </Label>
                  <Input
                    id="passengers"
                    name="passengers"
                    type="number"
                    min="1"
                    max="14"
                    value={formData.passengers}
                    onChange={handleChange}
                    placeholder="1"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-white flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2 text-[#D4AF37]" />
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Flight number, special requests, etc."
                  rows={4}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[#D4AF37] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold text-lg py-6 hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
              >
                Request Booking
              </Button>

              <p className="text-center text-gray-400 text-sm">
                * Required fields. Our team will contact you within 30 minutes to confirm your reservation.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Booking;