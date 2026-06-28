import React, { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import Breadcrumbs from '../components/Breadcrumbs';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = {
  full_name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.full_name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      setForm(initial);
      toast.success('Message sent — we\'ll be in touch shortly.');
    } catch (err) {
      const detail = err?.response?.data?.detail || 'Something went wrong. Please try again or call us directly.';
      setError(detail);
      toast.error('Could not send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact BWI Chauffeur 2026 | 24/7 Booking & Support | 877-679-0100</title>
        <meta
          name="description"
          content="Get in touch with BWI Chauffeur. Call 877-679-0100 or send us a message for luxury chauffeur service, airport transfers, and corporate transportation across Maryland, DC and Delaware."
        />
        <link rel="canonical" href="https://bwichauffeur.com/contact/" />
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16" data-testid="contact-page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            data-testid="contact-back-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact <span className="text-[#D4AF37]">BWI Chauffeur</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Questions, custom quotes, or corporate accounts — our team replies within
              one business day, 24/7 by phone.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Column */}
            <aside className="lg:col-span-1 space-y-4">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Call 24/7</p>
                      <a
                        href="tel:+18776790100"
                        className="text-xl font-bold text-white hover:text-[#D4AF37] transition-colors"
                        data-testid="contact-phone"
                      >
                        877-679-0100
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                      <a
                        href="mailto:info@bwichauffeur.com"
                        className="text-lg font-semibold text-white hover:text-[#D4AF37] transition-colors break-all"
                        data-testid="contact-email"
                      >
                        info@bwichauffeur.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Service Area</p>
                      <p className="text-white">
                        BWI Airport Area
                        <br />
                        Baltimore, Maryland
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Hours</p>
                      <p className="text-white">24 hours / 7 days</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Bookings, dispatch &amp; support around the clock.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/40 shadow-2xl">
                <CardContent className="p-6 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10" data-testid="contact-success">
                      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center">
                        <CheckCircle2 className="h-9 w-9 text-[#D4AF37]" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">
                        Message received
                      </h2>
                      <p className="text-gray-300 max-w-md mx-auto mb-6">
                        Thanks for reaching out. We&apos;ll reply to your email within one
                        business day. For anything urgent, call{' '}
                        <a href="tel:+18776790100" className="text-[#D4AF37] hover:underline">
                          877-679-0100
                        </a>{' '}
                        — we&apos;re available 24/7.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                          data-testid="contact-send-another"
                        >
                          Send another message
                        </Button>
                        <Link
                          to="/booking"
                          className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
                        >
                          Book a Ride
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="full_name" className="text-gray-300">
                            Name <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <Input
                            id="full_name"
                            name="full_name"
                            type="text"
                            required
                            value={form.full_name}
                            onChange={onChange}
                            placeholder="Jane Doe"
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-300">
                            Email <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={onChange}
                            placeholder="you@example.com"
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-email"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="phone" className="text-gray-300">
                            Phone <span className="text-gray-500 text-xs">(optional)</span>
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={onChange}
                            placeholder="(667) 555-0123"
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-phone"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-gray-300">
                            Subject <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={form.subject}
                            onChange={onChange}
                            placeholder="Corporate account inquiry"
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-subject"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-300">
                          Message <span className="text-[#D4AF37]">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={form.message}
                          onChange={onChange}
                          placeholder="Tell us how we can help..."
                          className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37] resize-none"
                          data-testid="contact-input-message"
                        />
                      </div>

                      {error && (
                        <div
                          className="flex items-start gap-2 p-3 rounded-md bg-red-900/30 border border-red-700/50 text-red-200 text-sm"
                          data-testid="contact-error"
                        >
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all py-6 text-base"
                        data-testid="contact-submit"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center pt-1">
                        If you consent to receive conversational and informational SMS messages from BWI Chauffeur,
                        you agree to receive conversational and informational SMS from us. Reply STOP to opt-out;
                        reply HELP for support; message &amp; data rates may apply; messaging frequency may vary.
                        Visit{' '}
                        <Link to="/privacy-policy" className="underline hover:text-[#D4AF37]">
                          https://bwichauffeur.com/privacy-policy
                        </Link>{' '}
                        to see our Privacy Policy and terms and conditions.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
